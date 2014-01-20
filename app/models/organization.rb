class Organization < ActiveRecord::Base
  attr_accessible :description, :title, :visibility
  validates :title, :presence => true

  has_many :user_memberships,
           :class_name => "UserOrganizationJointable"
  has_many :users, :through => :user_memberships, :source => :user
end
