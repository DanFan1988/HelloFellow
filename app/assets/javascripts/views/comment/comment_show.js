HF.Views.CommentShow = Backbone.View.extend({

  initialize: function(options){
    this.card_id = options.card_id
    this.listenTo(this.collection, "all", this.render)
  },

  template: JST['comment/show'],

  render: function(){
    var renderedContent = this.template({
      comments: this.collection
      })
    this.$el.html(renderedContent);
    return this;
  }
})
