json.description @card.description
json.id @card.id
json.list_id @card.list_id
json.list @card.list
json.title @card.title
json.comments @card.comments do |comment|
  json.id comment.id
  json.body comment.body
  json.card_id comment.card_id
  json.user comment.user
end
json.labels @card.labels do |label|
  json.id label.id
  json.color label.color
  json.card_id label.card_id
end
json.checklists @card.checklists do |checklist|
  json.id checklist.id
  json.card_id checklist.card_id
  json.title checklist.title
end