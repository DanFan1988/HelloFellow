class Api::LabelsController < ApplicationController
  def create
    @label = Label.new(params[:label])
    if @label.save
      render :json => @label
    else
      render :json => @label.errors.full_messages
    end
  end
end
