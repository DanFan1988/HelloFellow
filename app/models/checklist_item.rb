class ChecklistItem < ActiveRecord::Base
  attr_accessible :checklist_id, :title
  validates :checklist_id, :title, :presence => true

  has_many :checklists
end
