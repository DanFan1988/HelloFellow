class CommentsController < ApplicationController
  def index
    @comments = current_user.comments
  end

  def create
    @comment = Comment.new(params[:comment])
    p params
    if @comment.save
      render :json => @comment
    else
      render :json => @comment.errors.full_messages
    end
  end
end
