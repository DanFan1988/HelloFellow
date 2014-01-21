@activities.each do |activity|
  json.id activity.id
  json.user_id activity.user_id
  json.action activity.action
end