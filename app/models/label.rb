class Label < ActiveRecord::Base
  attr_accessible :card_id, :color, :title
  validates :card_id, :presence => true

  belongs_to :card
end
