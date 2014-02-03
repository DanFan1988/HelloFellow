HF.Models.Checklist = Backbone.Model.extend({
  parse: function(data){
    var checklist_items = data.checklist_items;
    data.checklist_items = new HF.Collections.ChecklistItems(checklist_items,
      { card_id: data.id, parse: true })
    return data;
  },
  name: "Checklist"
})