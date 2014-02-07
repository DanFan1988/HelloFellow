json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.friendships user.friendships
end