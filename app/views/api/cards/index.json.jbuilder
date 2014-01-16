json.array! @cards do |card|
  json.id card.id
  json.title card.title
  json.description card.description
  json.label card.label
  json.list_id card.list_id
end
