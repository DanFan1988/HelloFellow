class ChangeOrdersToFloat < ActiveRecord::Migration
  def change
    change_column :lists, :order, :float
    change_column :cards, :order, :float
  end
end
