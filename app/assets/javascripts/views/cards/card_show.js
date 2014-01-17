HF.Views.CardShow = Backbone.View.extend({

  initialize: function(options){
    this.list_id = options.list_id
  },

  template: JST['card/show'],

  render: function(){
    var renderedContent = this.template({
      card: this.model,
      list_id: this.list_id
      })
    this.$el.html(renderedContent);
    return this;
  },

  _renderComments: function(){
  	this.collection.each(function(card){
  		var commentsView = new HF.Views.ShowComments({
  		  collection: card.get('comments')
  		});
  		this.$el.find('#insert-comment').append(commentsView.render().$el);
  	});
  }

})