class Api::ChecklistItemsController < ApplicationController

  def create
    @checklist_item = ChecklistItem.new(params[:checklist_item])
    if @checklist_item.save
      render :json => @checklist_item
    else
      render :json => @checklist_item.errors.full_messages
    end
  end

  def update
    @checklist_item = ChecklistItem.find(params[:id])
    p params
    p "WE GET HERE"
    if @checklist_item.update_attributes(params[:checklist_item])
      render :show
    else
      render :json => @checklist_item.errors.full_messages
    end
  end
end
