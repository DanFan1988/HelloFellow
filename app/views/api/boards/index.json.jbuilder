json.array! @boards do |board|
  json.id board.id
  json.title board.title
  json.memberships board.memberships
end
