class Checklist < ActiveRecord::Base
  attr_accessible :card_id, :title
  validates :card_id, :title, :presence => true

  belongs_to :card

  has_many :checklist_items
end
