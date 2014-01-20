HF.Views.CardTitle = Backbone.View.extend({
  initialize: function(){
    // has model and coleciotn
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "mousedown #open-card-title-edit-form": "editCardTitleForm",
    "blur #edit-card-title": "editTitle"
  },

  template: JST['card/title'],
  edit_title_form_template: JST['card/edit_title'],

  render: function(){
    var renderedContent = this.template({
      card: this.model
      })
    this.$el.html(renderedContent);
    return this;
  },

  editCardTitleForm: function(event){
    event.preventDefault();
    var renderedContent = this.edit_title_form_template({
      card: this.model,
    })
    this.$el.find("#edit-card-title-form").html(renderedContent)
    $("#title-textarea").focus()
  },

  editTitle: function(event){
    event.preventDefault();
    var attrs = this.$('#edit-card-title').serializeJSON();
    this.model.set(attrs);
    this.model.save({})
  }
})