require './lib/SassyExport'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = SassyExport::VERSION

  # Gem Details
  s.name = "SassyExport"
  s.rubyforge_project = "SassyExport"
  s.licenses = ['MIT']
  s.authors = ["Ezekiel Gabrielse"]
  s.email = ["ezekg@yahoo.com"]
  s.homepage = "https://github.com/ezekg/SassyExport/"

  # Project Description
  s.summary = %q{SassyExport allows you to export a Sass map into an external JSON file.}
  s.description = %q{SassyExport is a lightweight Sass extension that allows you to export an encoded Sass map into an external JSON file.}

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Add to require
  s.require_paths = ["lib", "stylesheets"]

  # Other files
  s.files += ["README.md"]

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  # Gems Dependencies
  s.add_dependency("sass", [">=3.3.0"])
  s.add_dependency("json", [">=1.8.1"])

end
