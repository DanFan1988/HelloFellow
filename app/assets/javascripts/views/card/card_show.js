HF.Views.CardShow = Backbone.View.extend({

  initialize: function(options){
    this.list_id = options.list_id
  },

  events:{
    "click #show-card-form": "showCardForm",
    "click #create-card": "createCard"
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

  showCardForm: function(){
    console.log("making cardform")
    var cardForm = new HF.Views.CardForm({
      list_id: this.list_id,
      model: this.model,
      collection: this.collection
    })
    console.log(cardForm)
    $('#place-card-form').append(cardForm.render().$el)
  },


  createCard: function(){
    event.preventDefault();
  }
})
