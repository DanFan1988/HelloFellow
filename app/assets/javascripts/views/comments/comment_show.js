HF.Views.CommentShow = Backbone.View.extend({

  events:{},

  template: JST['comment'/'show'],

  render: function(){
    var renderedContent = this.template({
      comments: this.collection
      })
    this.$el.html(renderedContent);
    return this;
  }
})
