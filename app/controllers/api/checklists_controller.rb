class Api::ChecklistsController < ApplicationController

  def create
    @checklist = Checklist.new(params[:checklist])
    if @checklist.save
      render :show
    else
      render :json => @checklist.errors.full_messages
    end
  end

  def update
    @checklist = Checklist.find(params[:id])
    if @checklist.update_attributes(params[:checklist])
      render :show
    else
      render :json => @checklist.errors.full_messages
    end
  end
end
