HF.Views.CardDescription = Backbone.View.extend({
  initialize: function(){
    // has model and coleciotn
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .open-description-form": "openDescriptionForm",
    "blur #submit-card-description": "submitDescription"
  },

  template: JST['card/description'],
  edit_description_form_template: JST['card/edit_description'],

  render: function(){
    var renderedContent = this.template({
      card: this.model
      })
    this.$el.html(renderedContent);
    return this;
  },

  openDescriptionForm: function(event){
    console.log()
    event.preventDefault();
    var newDescription = this.edit_description_form_template({
      card: this.model
    })
    this.$el.html(newDescription)
    $("#description-textarea").focus()
  },

  submitDescription: function(event){
    console.log("we here?")
    event.preventDefault();
    var attrs = this.$('#submit-card-description').serializeJSON();
    this.model.set(attrs);
    this.model.save()
  }
})