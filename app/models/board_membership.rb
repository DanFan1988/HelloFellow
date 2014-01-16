class BoardMembership < ActiveRecord::Base
  attr_accessible :board_id, :integer, :user_id
  validates :board_id, :user_id, :presence => true

  belongs_to :user
  belongs_to :board
end
