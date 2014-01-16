class CreateBoardMemberships < ActiveRecord::Migration
  def change
    create_table :board_memberships do |t|
      t.integer :user_id
      t.string :board_id
      t.string :integer

      t.timestamps
    end
  end
end
