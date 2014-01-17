HF.Views.CommentShow = Backbone.View.extend({

  initialize: function(options){
    this.card_id = options.card_id
  },

  events:{},

  template: JST['comment/show'],

  render: function(){
    console.log("making cards")
    var renderedContent = this.template({
      comment: this.model,
      card_id: this.card_id
      })
    this.$el.html(renderedContent);
    return this;
  }
})
