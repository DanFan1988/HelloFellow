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
    redirect_to new_user_url if current_user.nil?
  end

  def require_no_current_user!
    redirect_to user_url(current_user) unless current_user.nil?
  end

  def setup_user(user)
    organization = Organization.create!({ title: "My Boards",
      description: "Your default board location", visibility: "private"})

    board = Board.create!({ title: "Welcome board", user_id: user.id,
      organization_id: organization.id })

    membership = BoardMembership.create!(user_id: user.id, board_id: board.id)

    list1 = List.create!({ title: "To do", board_id: board.id, order: 1})
    list2 = List.create!({ title: "Doing", board_id: board.id, order: 2})
    list3 = List.create!({ title: "Done", board_id: board.id, order: 3})

    card1 = Card.create!({ title: "Welcome to Not Trello!", list_id: list1.id, order: 1 })
    card2 = Card.create!({ title: "This is a Card.", list_id: list1.id, order: 2 })
    card3 = Card.create!({ title: "Click on a card to see what's behind it.", list_id: list1.id, order: 3 })

    card4 = Card.create!({ title: "This is the second List.", list_id: list2.id, order: 1 })
    card5 = Card.create!({ title: "Boards are comprised of lists, which are comprised of cards.", list_id: list2.id, order: 2 })
    card6 = Card.create!({ title: "You can edit / create boards, lists or cards. Try it out!", list_id: list2.id, order: 3 })

    card7 = Card.create!({ title: "Your Friend List and Activity Log is on the right sidebar", list_id: list3.id, order: 1 })
    card8 = Card.create!({ title: "Try dragging and dropping the cards...", list_id: list3.id, order: 2 })
    card9 = Card.create!({ title: "Or the lists.", list_id: list3.id, order: 3 })

    comment1 = Comment.create({ body: "This is a comment", card_id: card3.id})
    comment1 = Comment.create({ body: "And another", card_id: card3.id})
    comment1 = Comment.create({ body: "Comment comment", card_id: card8.id})
    comment1 = Comment.create({ body: "Blah blah", card_id: card2.id})
    comment1 = Comment.create({ body: "I wonder how long you can make comments??", card_id: card9.id})
    comment1 = Comment.create({ body: "Comment!", card_id: card4.id})
    comment1 = Comment.create({ body: "Not a comment", card_id: card5.id})
    comment1 = Comment.create({ body: "Maybe a comment", card_id: card5.id})
    comment1 = Comment.create({ body: "commmmmenting!", card_id: card6.id})
    comment1 = Comment.create({ body: "good comment", card_id: card7.id})

    checklist1 = Checklist.create({ title: "A checklist", card_id: card3.id })

    friendship1 = Friendship.create({ user_id: user.id, friend_id: 1})
    friendship2 = Friendship.create({ user_id: user.id, friend_id: user.id})


  end
end
