HF.Views.cardView = Backbone.View.extend({
  template: JST['card'/'show'],

  render: function(){
    var renderedContent = this.template({
      board: this.model,
      lists: this.lists,
      cards: this.cards
      })
    this.$el.html(renderedContent);
    return this;
  }


})