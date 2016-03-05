json.array!(@comments) do |comment|
  json.extract! comment, :id, :fname, :lname, :email, :message, :post_id
  json.url comment_url(comment, format: :json)
end
