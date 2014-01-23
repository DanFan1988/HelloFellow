class Card < ActiveRecord::Base
  attr_accessible :description, :list_id, :title, :order
  validates :title, :list_id, :presence => true
  # validates :order, :uniqueness => { :scope => :list_id }

  belongs_to :list

  belongs_to :board

  belongs_to :user

  has_many :comments, :dependent => :destroy
  has_many :labels, :dependent => :destroy
  has_many :checklists, :dependent => :destroy
end
