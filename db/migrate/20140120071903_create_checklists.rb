class CreateChecklists < ActiveRecord::Migration
  def change
    create_table :checklists do |t|
      t.string :title
      t.integer :card_id

      t.timestamps
    end
  end
end
