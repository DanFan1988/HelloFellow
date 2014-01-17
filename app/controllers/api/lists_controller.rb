class Api::ListsController < ApplicationController

  def index
    @lists = current_user.lists
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
    head :ok
  end
end
