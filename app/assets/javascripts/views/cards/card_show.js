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
    this._renderComments()
    return this;
  },

  _renderComments: function(){
    var that = this;
    this.model.get('comments').each(function(comment){
      var commentsView = new HF.Views.CommentShow({
        model: comment,
        card_id: that.model.id
      })
      that.$el.find('#insert-comment').append(commentsView.render().$el);
  	});
  }
})
