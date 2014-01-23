json.id @checklist.id
json.card_id @checklist.card_id
json.title @checklist.title
json.checklist_items @checklist.checklist_items do |checklist_item|
  json.id checklist_item.id
  json.checked checklist_item.checked
  json.checklist_id checklist_item.checklist_id
  json.title checklist_item.title
end
