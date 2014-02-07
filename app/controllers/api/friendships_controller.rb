class Api::FriendshipsController < ApplicationController
	def index
		@friendships = current_user.friendships
	end

	 def create
    @friendship = Friendship.new(params[:friendship])
    @friendship.user_id = current_user.id
    if @friendship.save
      render :json => @friendship
    else
      render :json => @friendship.errors.full_messages
    end
  end
end