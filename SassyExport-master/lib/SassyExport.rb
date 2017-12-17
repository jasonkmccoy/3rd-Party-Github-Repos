require 'sass'
require "json"

base_directory = File.expand_path(File.join(File.dirname(__FILE__), '..'))
sassyexport_stylesheets_path = File.join(base_directory, 'stylesheets')

if (defined? Compass)
    Compass::Frameworks.register('SassyExport', :path => base_directory)
else
    ENV["SASS_PATH"] = [ENV["SASS_PATH"], sassyexport_stylesheets_path].compact.join(File::PATH_SEPARATOR)
end

module SassyExport
    VERSION = "1.4.0"
end

###
# Convert passed map to json and write to <path>/<filename>.<ext>
#
# @param {String} path
#    Directory path and filename
# @param {map}    map
#    Map to convert to json
# @param {Bool}   pretty
#    Pretty print json
# @param {Bool}   debug
#    Print debug string with path
# @param {Bool}   use_env
#    Use ENV['PWD'] for current directory instead of Dir.pwd
#
# @return {String}
#    Write file to path
###
module Sass::Script::Functions
    def SassyExport(path, map, pretty, debug, use_env)

        def opts(value)
            value.options = options
            value
        end

        # Unquote strings
        def u(s)
            unquote(s)
        end

        ###
        # Recursive parse to array
        ###
        def recurs_to_a(array)
            if array.is_a?(Array)
                array.map do | l |
                    case l
                    when Sass::Script::Value::Map
                        # If map, recurse to hash
                        l = recurs_to_h(l)
                    when Sass::Script::Value::List
                        # If list, recurse to array
                        l = recurs_to_a(l)
                    when Sass::Script::Value::Bool
                        # Convert to bool
                        l = l.to_bool
                    when Sass::Script::Value::Number
                        # If it's a unitless number, convert to ruby val, else convert to string
                        l.unitless? ? l = l.value : l = u(l)
                    when Sass::Script::Value::Color
                        # Get hex/rgba value for color
                        l = l.inspect
                    else
                        # Convert to string
                        l = u(l)
                    end
                    l
                end
            else
                recurs_to_a(array.to_a)
            end
        end

        ###
        # Recursive parse to hash
        ###
        def recurs_to_h(hash)
            if hash.is_a?(Hash)
                hash.inject({}) do | h, (k, v) |
                    case v
                    when Sass::Script::Value::Map
                        # If map, recurse to hash
                        h[u(k)] = recurs_to_h(v)
                    when Sass::Script::Value::List
                        # If list, recurse to array
                        h[u(k)] = recurs_to_a(v)
                    when Sass::Script::Value::Bool
                        # Convert to bool
                        h[u(k)] = v.to_bool
                    when Sass::Script::Value::Number
                        # If it's a unitless number, convert to ruby val, else convert to string
                        v.unitless? ? h[u(k)] = v.value : h[u(k)] = u(v)
                    when Sass::Script::Value::Color
                        # Get hex/rgba value for color
                        h[u(k)] = v.inspect
                    else
                        # Convert to string
                        h[u(k)] = u(v)
                    end
                    h
                end
            else
                recurs_to_h(hash.to_h)
            end
        end

        # Assert types
        assert_type path, :String, :path
        assert_type map, :Map, :map
        assert_type pretty, :Bool, :pretty
        assert_type debug, :Bool, :debug
        assert_type use_env, :Bool, :use_env

        # Parse to bool
        pretty = pretty.to_bool
        debug = debug.to_bool
        use_env = use_env.to_bool

        # Parse to string
        path = unquote(path).to_s

        # Define root path up to current working directory
        root = use_env ? ENV['PWD'] : Dir.pwd

        # Define dir path
        dir_path = root
        dir_path += path

        # Get filename
        filename = File.basename(dir_path, ".*")

        # Get extension
        ext = File.extname(path)

        # Normalize windows path
        dir_path = Sass::Util.pathname(dir_path)

        # Check if directory exists, if not make directory
        dir = File.dirname(dir_path)

        unless File.exists?(dir)
            FileUtils.mkdir_p(dir)
            puts "Directory was not found. Created new directory: #{dir}"
        end

        # Get map values
        map = opts(Sass::Script::Value::Map.new(map.value))

        # Recursive convert map to hash
        hash = recurs_to_h(map)

        # Convert hash to pretty json if pretty
        pretty ? json = JSON.pretty_generate(hash) : json = JSON.generate(hash)

        # If we're turning it straight to js put a variable name in front
        json = "var " + filename + " = " + json if ext == '.js'

        # Define flags
        flag = 'w'
        flag = 'wb' if Sass::Util.windows? && options[:unix_newlines]

        # Ppen file (create new file if file does not exist), write string to root/path/to/filename.json
        File.open("#{dir_path}", flag) do |file|
            file.set_encoding(json.encoding) unless Sass::Util.ruby1_8?
            file.print(json)
        end

        # Define message
        debug_msg = "#{ext == '.json' ? 'JSON' : 'JavaScript'} was successfully exported to #{dir_path}"

        # Print path string if debug
        puts debug_msg if debug

        # Return succcess string
        opts(Sass::Script::Value::String.new(debug_msg))
    end
    declare :SassyExport, [:path, :map, :pretty, :debug, :use_env]
end
