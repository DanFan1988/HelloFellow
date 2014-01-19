class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :title
      t.text :description
      t.string :visibility
      t.timestamps
    end
    add_column :users, :organization_id, :integer
  end
end
