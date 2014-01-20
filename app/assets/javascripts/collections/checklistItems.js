HF.Collections.ChecklistItems = Backbone.Collection.extend({
  url: "/api/checklist_items",
  model: HF.Models.ChecklistItem
})

