class Comment < ActiveRecord::Base
  attr_accessible :body, :card_id
  validate :body, :card_id, :presence => true

  belongs_to :user

  belongs_to :card
end
