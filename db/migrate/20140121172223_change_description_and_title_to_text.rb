class ChangeDescriptionAndTitleToText < ActiveRecord::Migration
  def change
    change_column :cards, :description, :text
    change_column :cards, :title, :text
  end
end
