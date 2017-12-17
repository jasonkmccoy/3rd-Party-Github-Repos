# SassyExport [![Gem Version](https://badge.fury.io/rb/SassyExport.svg)](http://badge.fury.io/rb/SassyExport)

SassyExport is a lightweight Sass extension that allows you to export an encoded Sass map into an external JSON file. Use it anyway you like.

## Installation

1. `gem install SassyExport`
2. Add `require "SassyExport"` to your `config.rb`
3. Import into your stylesheet with `@import "SassyExport";`

## Documentation

#### Setup

Our file structure,
```
root
├── sass
│   ├── style.scss
├── json
└── config.rb
```

Sass,
```scss
// sass/style.scss

@import "SassyExport";

$map: (
	hello: world,
);

///
/// Convert passed map to json and write to <path>/<filename>.<ext>
///
/// @param {String} $path    - Directory path and filename
/// @param {map}    $map     - Map to convert to json
/// @param {Bool}   $pretty  - Pretty print json
/// @param {Bool}   $debug   - Print debug string with path
/// @param {Bool}   $use_env - Use ENV['PWD'] for current directory instead of Dir.pwd
///
/// @return {String} - Write file to path
///
@include SassyExport("/json/hello.json", $map);
```

#### Result

New JSON file is created at `./json/hello.json`. As you can see, `$path` is relative to where your `config.rb` is located. Simply calling `@include SassyExport("/hello.json", $map)` will write to your directory root.
```json
{
	"hello": "world"
}
```

#### Breakdown

The `SassyExport()` mixin takes a `\<directory\>/\<filename\>.\<ext\>` `$path` and a Sass `$map` as arguments. You can export straight to a Javascript object by using the extension `.js` instead of `.json`.
There are also optional arguments: `$pretty` which defaults to `false`, but will print pretty JSON (nicely indented) if set to `true`; and `$debug` which will print debug information if set to `true`.

It converts the `$map` into either a JSON map or Javascript object through Ruby, then creates a new directory/file (or updates an existing directory/file), and writes the contents of the JSON string to it.
Contributions are welcome. If you believe that you could improve the small amount of code here, feel free to.

Enjoy.

## Also Check Out

* [SassyJSON](https://github.com/HugoGiraudel/SassyJSON)
