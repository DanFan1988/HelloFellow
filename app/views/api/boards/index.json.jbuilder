json.array! @boards do |board|
  json.id board.id
  json.title board.title
  json.lists board.lists do |list|
    json.id list.id
    json.title list.title
    json.cards list.cards do |card|
      json.description card.description
      json.id card.id
      json.label card.label
      json.list_id card.list_id
      json.list card.list
      json.title card.title
      json.comments card.comments do |comment|
        json.id comment.id
        json.body comment.body
        json.card_id comment.card_id
        json.user comment.user
      end
      json.label card.labels do |label|
        json.id label.id
        json.color label.color
        json.title label.title
      end
      json.checklists card.checklists do |checklist|
        json.id checklist.id
        json.card_id checklist.card_id
        json.title checklist.title
      end
    end
  end
end
