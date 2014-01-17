class Api::ListsController < ApplicationController

  def index
    @lists = current_user.lists
  end

  def create
    p params
    @list = List.new(params[:list])
    if @list.save
      render :json => @list
    else
      render :json => @list.errors.full_messages, :status => 422
    end
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
    head :ok
  end

end
