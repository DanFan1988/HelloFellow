HF.Views.CardShow = Backbone.View.extend({

  initialize: function(options){
    this.list_id = options.list_id
  },

  events:{
    "click #submit-card-description": "submitCardDescription" //unfinished
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
    this.model.get('comments') && this.model.get('comments').each(function(comment){
      var commentsView = new HF.Views.CommentShow({
        model: comment,
        card_id: that.model.id
      })

      that.$el.find('#insert-comment').append(commentsView.render().$el);
  	});
  },

  submitCardDescription: function(event){
    console.log("we here?")
      event.preventDefault();
      var attrs = this.$el.serializeJSON();
      this.model.set(attrs);
      this.model.collection = this.collection
      this.model.save({}, {
        success: function () {
          console.log("you are the best")
        }
      });
  }
})
