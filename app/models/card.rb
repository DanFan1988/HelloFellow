class Card < ActiveRecord::Base
  attr_accessible :description, :label, :list_id, :title
  validates :title, :list_id, :presence => true

  belongs_to :list

  belongs_to :board


end
