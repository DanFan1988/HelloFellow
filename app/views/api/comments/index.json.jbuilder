json.comments @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.card_id comment.card_id
  json.user comment.user
end