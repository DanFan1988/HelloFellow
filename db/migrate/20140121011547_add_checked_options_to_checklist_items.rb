class AddCheckedOptionsToChecklistItems < ActiveRecord::Migration
  def change
    add_column :checklist_items, :checked, :string, :default => "no"
  end
end
