class AddOrderAttributeToCardsAndLists < ActiveRecord::Migration
  def change
    add_column :lists, :order, :integer
    add_column :cards, :order, :integer
  end
end
