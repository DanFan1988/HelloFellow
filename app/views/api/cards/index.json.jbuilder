json.array! @cards do |card|
  json.id card.id
  json.title card.title
  json.description card.description
  json.list_id card.list_id
  json.list card.list
end
