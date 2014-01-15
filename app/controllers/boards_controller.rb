class BoardsController < ApplicationController
  def index
    @boards = Boards.all
    render :json => @boards
  end

  def create
    @board = Board.new(params[:board])
    @board.user_id = current_user.id
    if @board.save
      render :json => @board
    else
      render :json => @board.errors.full_messages
    end
  end

  def new
    @board = Board.new
    @lists = Lists.where(board_id: params[:id])
  end

  def show
    @board = Board.find(params[:id])
  end

  def edit
    @board = Board.find(parmas[:id])
    if @board.update_attributes
      render :json => @board
    else
      render :json => @board.errors.full_messages
    end
  end

  def update
    @board = Board.find(params[:id])
  end

  def destroy
    board = Board.find(params[:id])
    board.destroy
  end
end
