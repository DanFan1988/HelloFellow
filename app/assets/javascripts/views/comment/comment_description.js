HF.Views.DescriptionForm = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change:description", this.render)

  },

  events:{
    "submit #submit-card-description": "submitDescription"
  },

  template: JST['card/description'],

  render: function(){
    var renderedContent = this.template({
      card: this.model
      })
    this.$el.html(renderedContent);
    return this;
  },

  submitDescription: function(event){
    console.log("we here?")
    event.preventDefault();
    var attrs = this.$('#submit-card-description').serializeJSON();
    this.model.set(attrs);
    this.model.save()
  }
})