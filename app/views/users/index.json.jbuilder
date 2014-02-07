json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.email user.email
  json.friendships user.friendships
end