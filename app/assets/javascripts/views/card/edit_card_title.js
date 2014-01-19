HF.Views.EditCardTitle = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change:title", this.render)
  },

  events:{
    "submit #edit-card-title": "editTitle"
  },

  template: JST['card/edit_title'],

  render: function(){
    var renderedContent = this.template({
      card: this.model
      })
    this.$el.html(renderedContent);
    return this;
  },

  editTitle: function(event){
    console.log("we here?")
    event.preventDefault();
    var attrs = this.$('#edit-card-title').serializeJSON();
    this.model.set(attrs);
    this.model.save({})
  }
})