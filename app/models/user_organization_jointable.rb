class UserOrganizationJointable < ActiveRecord::Base
  attr_accessible :organization_id, :user_id
  validates :organization_id, :user_id, :presence => true
  validates :organization_id, :uniqueness => {:scope => :user_id}
end
