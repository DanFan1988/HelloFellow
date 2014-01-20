HF.Views.EditListTitle = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change:title", this.render);
  },

  events:{
    "submit #edit-list-title": "editTitle"
  },

  template: JST['list/edit_title'],

  render: function(){
    var renderedContent = this.template({
      list: this.model
      })
    this.$el.html(renderedContent);
    return this;
  },

  editTitle: function(event){
    console.log("we here?")
    event.preventDefault();
    var attrs = this.$('#edit-list-title').serializeJSON();
    this.model.set(attrs);
    this.model.save()
  }
})