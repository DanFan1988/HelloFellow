class Activity < ActiveRecord::Base
  attr_accessible :action, :user_id
  validates :user_id, :action, :presence => true

  belongs_to :user
end
