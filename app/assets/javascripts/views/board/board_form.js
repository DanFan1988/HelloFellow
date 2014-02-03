HF.Views.BoardForm = Backbone.View.extend({
  
  template: JST['general'/'rename_dropdown'],

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