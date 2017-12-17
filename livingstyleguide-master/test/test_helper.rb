require 'minitest/autorun'
require 'compass'
require 'livingstyleguide'
require 'heredoc_unindent'

Compass.configuration.add_import_path File.join(%w(test fixtures stylesheets))

def parse_file(filename)
  filename = File.join(File.dirname(__FILE__), 'fixtures', filename.split('/'))
  syntax   = filename[-4..-1].to_sym
  syntax   = :scss unless [:scss, :sass].include?(syntax)
  options  = {
    :filename   => filename,
    :load_paths => [File.dirname(filename)],
    :syntax     => syntax,
    :cache      => false,
    :read_cache => false
  }
  Sass::Engine.new(File.read(filename), options)
end

def normalize(html)
  html.gsub! /\s+/, ' '
  html.gsub! '><', '> <'
  html.strip!
  html
end

