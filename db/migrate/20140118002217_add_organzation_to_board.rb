class AddOrganzationToBoard < ActiveRecord::Migration
  def change
    add_column :boards, :organization_id, :integer
  end
end
