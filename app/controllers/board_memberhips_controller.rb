class BoardMemberhipsController < ApplicationController
  def index

  end

  def create
  	@membership = BoardMembership.new(params[:membership])
  	if @membership.save
  		render :json => @membership
  	else
  		render :json => @membership.errors.full_messages
  	end
  end
end
