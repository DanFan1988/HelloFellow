class Api::OrganizationsController < ApplicationController

  def index
    @organizations = current_user.organizations
    render :json => @organizations
  end

  def create
    @organization = Board.new(params[:organization])
    @organization.user_id = current_user.id
    if @organization.save
      render :json => @organizations
    else
      render :json => @organization.errors.full_messages
    end
  end

  def update
    @organization = Board.find(params[:id])
    if @organization.update_attributes(params[:organization])
      render :show
    else
      render :json => @organization.errors.full_messages
    end
  end

end
