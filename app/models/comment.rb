class Comment < ActiveRecord::Base
  attr_accessible :body, :card_id

  belongs_to :user

  belongs_to :card
end
