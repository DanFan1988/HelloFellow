HF.Views.ChecklistItemForm = Backbone.View.extend({

  initialize: function(options){
    this.checklist = options.checklist
    // debugger;
    // this.listenTo(this.collection, "add sync", this.render)
  },

  events:{
    "click #open-checklist-item-form": "openChecklistItemForm",
    "submit #submit-checklist-item": "submitChecklistItem",
  },

  template: JST['checklist_item/show'],

  render: function(){
    var renderedContent = this.template({
      checklist: this.checklist,
    })
    this.$el.html(renderedContent);
    return this;
  },

  submitChecklistItem: function(event){
    event.preventDefault();
    var attrs = this.$('#submit-checklist-item').serializeJSON();
    var item = new HF.Models.ChecklistItem
    item.set(attrs);
    console.log(this.collection)
    if (item.isNew()) {
      this.collection.create(item);
    } else {
      item.save({});
    }
  }

})









