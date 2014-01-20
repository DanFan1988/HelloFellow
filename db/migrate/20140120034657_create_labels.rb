class CreateLabels < ActiveRecord::Migration
  def change
    create_table :labels do |t|
      t.integer :card_id
      t.string :color
      t.string :title

      t.timestamps
    end
  end
end
