json.array!(@fonts) do |font|
  json.extract! font, :id, :name, :font_class
  json.url font_url(font, format: :json)
end
