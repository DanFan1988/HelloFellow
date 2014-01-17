module SessionsHelper
  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def current_user=(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logout_current_user!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_current_user!
    redirect_to new_session_url if current_user.nil?
  end

  def require_no_current_user!
    redirect_to user_url(current_user) unless current_user.nil?
  end

  def setup_user(user)
    board = Board.create!({ title: "First board", user_id: user.id })

    membership = BoardMembership.create!(user_id: user.id, board_id: board.id)

    list1 = List.create!({ title: "To do", board_id: board.id })
    list2 = List.create!({ title: "Doing", board_id: board.id })
    list3 = List.create!({ title: "Done", board_id: board.id })

    card1 = Card.create!({ title: "Card 1", list_id: list1.id })
    card2 = Card.create!({ title: "Card 2", list_id: list1.id })
    card3 = Card.create!({ title: "Card 3", list_id: list1.id })

    card4 = Card.create!({ title: "Card 1", list_id: list2.id })
    card5 = Card.create!({ title: "Hire me", list_id: list2.id })
    card6 = Card.create!({ title: "Card 3", list_id: list2.id })

    card7 = Card.create!({ title: "Card 1", list_id: list3.id })
    card8 = Card.create!({ title: "Card 2", list_id: list3.id })

    comment1 = Comment.create({ body: "THIS IS A COMMENT", card_id: card1.id})
    comment1 = Comment.create({ body: "THIS IS As COMMENT", card_id: card1.id})
    comment1 = Comment.create({ body: "THIS IS A fCOMMENT", card_id: card1.id})
    comment1 = Comment.create({ body: "THIS IS A CadsfOMMENT", card_id: card2.id})
    comment1 = Comment.create({ body: "THIS IS A COMMEadsfNT", card_id: card3.id})
    comment1 = Comment.create({ body: "THIS IS asdfA COMMENT", card_id: card4.id})
    comment1 = Comment.create({ body: "THIS IS A CasdfOMMENT", card_id: card5.id})
    comment1 = Comment.create({ body: "THIasdfS IS A COMMENT", card_id: card5.id})
    comment1 = Comment.create({ body: "pls work", card_id: card5.id})
    comment1 = Comment.create({ body: "THIS IS A CasdfOMMENT", card_id: card5.id})
    comment1 = Comment.create({ body: "THIS IS A COMMasdfENT", card_id: card6.id})
    comment1 = Comment.create({ body: "THIS IasdfS A COMMENT", card_id: card7.id})

  end
end
