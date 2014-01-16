class Api::ListsController < ApplicationController

  def index
    @lists = current_user.lists
  end

end
