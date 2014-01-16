HF.Views.cardView = Backbone.View.extend({

  events:{},

  template: JST['card'/'show'],

  render: function(){
    var renderedContent = this.template({
      card: this.model
      })
    this.$el.html(renderedContent);
    return this;
  }


})