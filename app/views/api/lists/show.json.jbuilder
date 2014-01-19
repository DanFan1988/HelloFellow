json.id @list.id
json.title @list.title
json.cards @list.cards do |card|
  json.description card.description
  json.id card.id
  json.label card.label
  json.list_id card.list_id
  json.title card.title
  json.comments card.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.card_id comment.card_id
    json.user comment.user
  end
end