class DeletelabelcolumnfromCards < ActiveRecord::Migration
  def change
    remove_column :cards, :label
  end
end
