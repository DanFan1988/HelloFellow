class Api::ActivitiesController < ApplicationController
  def index
    @activities = current_user.activities
    render :index
  end

  def create
    @activity = Activity.new(params[:activity])

    if @activity.save
      render :json => @activity
    else
      render :json => @activity.errors.full_messages
    end
  end
end
