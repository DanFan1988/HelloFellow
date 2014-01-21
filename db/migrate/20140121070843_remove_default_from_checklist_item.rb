class RemoveDefaultFromChecklistItem < ActiveRecord::Migration
  def change
    change_column :checklist_items, :checked, :string
  end
end
