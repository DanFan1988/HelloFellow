HF.Views.ListShow = Backbone.View.extend({

  events: {
  },

  template: JST['list/show'],

  render: function(){
    var renderedContent = this.template({
    list: this.model
    })
    this.$el.html(renderedContent);
    this._renderCards();
    return this;
  },

  _renderCards: function(){
    var that = this;
    this.model.get('cards').each(function(card){
      var cardView = new HF.Views.CardShow({
        model: card,
        list_id: that.model.id
      });
      that.$el.find('#insert-card').append(cardView.render().$el);
    });
  }
})