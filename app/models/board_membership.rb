class BoardMembership < ActiveRecord::Base
  attr_accessible :board_id, :integer, :user_id

  belongs_to :user
  belongs_to :board
end
