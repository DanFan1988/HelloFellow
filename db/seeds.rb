# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


ActiveRecord::Base.transaction do
  board1 = Board.create({ title: "First board", user_id: 1})
  board2 = Board.create({ title: "Second board", user_id: 1})
  board3 = Board.create({ title: "Third board", user_id: 1})

  list1 = List.create({ title: "List 1", board_id: 1 })
  list2 = List.create({ title: "List 2", board_id: 1 })
  list3 = List.create({ title: "List 3", board_id: 1 })

  card1 = Card.create({ title: "Card 1"})
end