HF.Collections.Checklists = Backbone.Collection.extend({
  url: "/api/checklists",
  model: HF.Models.Checklist,

  parse: function(data){
    var checklist_items = data.checklist_items;
    data.checklist_items = new HF.Collections.ChecklistItems(checklist_items,
      { card_id: data.id, parse: true })

    return data;
  }
})

