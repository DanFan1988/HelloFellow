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

  board4 = Board.create({ title: "First board", user_id: 2})
  board5 = Board.create({ title: "Second board", user_id: 2})
  board6 = Board.create({ title: "Third board", user_id: 2})

  list1 = List.create({ title: "List 1", board_id: 1 })
  list2 = List.create({ title: "List 2", board_id: 1 })
  list3 = List.create({ title: "List 3", board_id: 1 })

  card1 = Card.create({ title: "Card 1 List 1", list_id: 1})
  card1 = Card.create({ title: "Card 2", list_id: 1})
  card1 = Card.create({ title: "Card 3", list_id: 1})

  card1 = Card.create({ title: "Card 1 List 2", list_id: 2})
  card1 = Card.create({ title: "Card 2", list_id: 2})
  card1 = Card.create({ title: "Card 3", list_id: 2})

  card1 = Card.create({ title: "Card 1 List 3", list_id: 3})
  card1 = Card.create({ title: "Card 2", list_id: 3})

  comment1 = Comment.create({ body: "THIS IS A COMMENT", card_id: 1})
  comment1 = Comment.create({ body: "THIS IS As COMMENT", card_id: 1})
  comment1 = Comment.create({ body: "THIS IS A fCOMMENT", card_id: 1})
  comment1 = Comment.create({ body: "THIS IS A CadsfOMMENT", card_id: 2})
  comment1 = Comment.create({ body: "THIS IS A COMMEadsfNT", card_id: 2})
  comment1 = Comment.create({ body: "THIS IS asdfA COMMENT", card_id: 2})
  comment1 = Comment.create({ body: "THIS IS A CasdfOMMENT", card_id: 3})
  comment1 = Comment.create({ body: "THIasdfS IS A COMMENT", card_id: 3})
  comment1 = Comment.create({ body: "THIS ISasdf A COMMENT", card_id: 3})
  comment1 = Comment.create({ body: "THIS IS A CasdfOMMENT", card_id: 4})
  comment1 = Comment.create({ body: "THIS IS A COMMasdfENT", card_id: 4})
  comment1 = Comment.create({ body: "THIS IasdfS A COMMENT", card_id: 4})




end