class List < ActiveRecord::Base
  attr_accessible :board_id, :title, :order
  validates :board_id, :title, :presence => true

  belongs_to :board
  belongs_to :user
  has_many :cards, :dependent => :destroy
end
