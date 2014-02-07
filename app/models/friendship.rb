class Friendship < ActiveRecord::Base
  attr_accessible :friend_id, :user_id
  
  validates :user_id, :friend_id, :presence => true
  validates :user_id, :uniqueness => {:scope => :friend_id}

  has_many :users
end
