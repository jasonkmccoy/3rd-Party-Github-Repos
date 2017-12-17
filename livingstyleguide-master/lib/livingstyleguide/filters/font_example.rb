LivingStyleGuide::Engine.default_options[:font_example] = { text: <<-TEXT }
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  abcdefghijklmnopqrstuvwxyz
  0123456789
  !&/()$=@;:,.
TEXT

LivingStyleGuide::Example.add_filter :font_example do |font|
  suppress_code_block

  html do |content|
    %(<div class="livingstyleguide--font-example" style="font: #{ERB::Util.html_escape(font)}">\n#{content}\n</div>\n)
  end

  pre_processor do |content|
    content = options[:font_example][:text] if content == ''
    content = ERB::Util.html_escape(content)
    content.strip.gsub(/\n/, "<br>\n")
  end
end

