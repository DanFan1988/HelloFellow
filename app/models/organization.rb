class Organization < ActiveRecord::Base
  attr_accessible :description, :title, :visibility
  validates :title, :presence => true
end
