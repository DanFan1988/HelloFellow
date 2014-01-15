class StaticPagesController < ApplicationController
  before_filter :require_current_user!

  def root
    @boards = Board.where(user_id: current_user.id).reverse
  end
end
