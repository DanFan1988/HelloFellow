HF.Views.ChecklistShow = Backbone.View.extend({
  //has a checklist model
  initialize: function(options){
  },

  events:{
    "submit #new-title-form": "renameTitle",
    "click #open-checklist-item-form": "openChecklistItemForm"
  },

  template: JST['checklist/show'],

  render: function(){
    var renderedContent = this.template({
      checklist: this.model
    })
    this.$el.html(renderedContent);
    return this;
  },

  renameTitle: function(event){
    event.preventDefault();
    var attrs = this.$('#new-title-form').serializeJSON();
    this.model.set(attrs)
    this.model.save({})
  },

  openChecklistItemForm: function(event){
    console.log("ARE WE THERE YET?")
    event.preventDefault()
    debugger;
    var form = new HF.Views.ChecklistItemForm({
      checklist: this.model,
      collection: this.model.get('checklist_items')
    })
    this.$el.find('#insert-checklist-items').html(form.render().$el)
  }
})
