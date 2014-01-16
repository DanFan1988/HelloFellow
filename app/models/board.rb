class Board < ActiveRecord::Base
  attr_accessible :title, :user_id
  validates :title, :user_id, :presence => true

  belongs_to :user, :dependent => :destroy
  has_many :lists
  has_many :cards, :through => :lists, :source => :cards
  has_many :members,
  		   :class_name => "Board_Membership",
  		   :foreign_key => :board_id
end
