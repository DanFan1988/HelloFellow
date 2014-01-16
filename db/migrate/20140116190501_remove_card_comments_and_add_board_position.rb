class RemoveCardCommentsAndAddBoardPosition < ActiveRecord::Migration
  def change
    add_column :boards, :position, :integer
  end
end
