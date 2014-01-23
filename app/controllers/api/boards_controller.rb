class Api::BoardsController < ApplicationController
  def index
    @boards = current_user.boards.includes(:lists => {:cards => [:comments, :labels, {:checklists => :checklist_items}, :list]})
  end

  def create
    @board = Board.new(params[:board])
    @board.user_id = current_user.id
    if @board.save
      render :show
    else
      render :json => @board.errors.full_messages
    end
  end

  # def new
  #   @board = Board.new
  # end
  #
  # def show
  #   @board = Board.find(params[:id])
  #   #add in association if jbuilder can't handle the association
  #   @lists = @board.lists
  #   @cards = @board.cards
  # end

  def update
    @board = Board.find(params[:id])
    if @board.update_attributes(params[:board])
      render :show
    else
      render :json => @board.errors.full_messages
    end
  end

  def destroy
    board = Board.find(params[:id])
    board.destroy
    head :ok
  end
end
