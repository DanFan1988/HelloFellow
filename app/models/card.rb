class Card < ActiveRecord::Base
  attr_accessible :description, :label, :list_id, :title
  validates :title, :list_id, :presence => true

  belongs_to :list

  belongs_to :board

  belongs_to :user

  has_many :comments, :dependent => :destroy
  has_many :labels, :dependent => :destroy

end
