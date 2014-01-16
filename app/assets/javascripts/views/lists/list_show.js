HF.Views.ListShow = Backbone.View.extend({

  events: {
  },

  template: JST['list/show'],

  render: function(){
      var renderedContent = this.template({
      lists: this.collection
      })
    this.$el.html(renderedContent);
    this._renderCards()
    return this;
  }

  _renderCards: function(){
    this.collection.each(function(list){
      var cardView = new HF.View.ShowCard({
        collection: list.get('cards')
      });
      this.$el.find('#insert-card').append(cardView.render());
    })
  }
})