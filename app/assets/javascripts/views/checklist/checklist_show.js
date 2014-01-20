HF.Views.ChecklistShow = Backbone.View.extend({
  //has a checklist model
  initialize: function(options){
  },

  events:{
    "submit #new-title-form": "renameTitle"
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
})
