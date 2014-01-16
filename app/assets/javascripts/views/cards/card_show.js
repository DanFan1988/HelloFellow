HF.Views.CardShow = Backbone.View.extend({

  events:{},

  template: JST['card'/'show'],

  render: function(){
    var renderedContent = this.template({
      cards: this.collection
      })
    this.$el.html(renderedContent);
    return this;
  },

  _renderComments: function(){
  	this.collection.each(function(card){
  		var commentsView = new HF.Views.ShowComments({
  		  collection: card.get('comments')	
  		});
  		this.$el.find('#insert-comment').append(commentsView.render());
  	});
  }

})