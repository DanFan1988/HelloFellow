HF.Views.CardLabel = Backbone.View.extend({
  initialize: function(options){
    this.card = options.card,
    this.model = options.model
  },

  template: JST['card/label'],

  render: function(){
    var renderedContent = this.template({
      card: this.card,
      labels: this.model
      })
      console.log(this.model)
    this.$el.html(renderedContent);
    return this;
  }
})