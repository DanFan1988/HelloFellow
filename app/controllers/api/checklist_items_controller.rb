class Api::ChecklistItemsController < ApplicationController

  def create
    @checklist_item = ChecklistItem.new(params[:checklist])
    if @checklist_item.save
      render :json => @checklist_item
    else
      render :json => @checklist_item.errors.full_messages
    end
  end
end
