json.id @card.id
json.title @card.title
json.description @card.description
json.label @card.label
json.list_id @card.list_id
json.list @card.list
json.comments @card.comments do |comment|
  json.id comment.id
  json.body comment.body
  json.card_id comment.card_id
  json.user comment.user
end