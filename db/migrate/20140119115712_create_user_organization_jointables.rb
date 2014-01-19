class CreateUserOrganizationJointables < ActiveRecord::Migration
  def change
    create_table :user_organization_jointables do |t|
      t.integer :user_id
      t.integer :organization_id

      t.timestamps
    end
  end
end
