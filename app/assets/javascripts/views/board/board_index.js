HF.Views.userBoards = Backbone.View.extend({

  events:{},

  template: JST['board/index'],

  render: function(){
    var renderedContent = this.template({
      boards: this.collection
    })
    this.$el.html(renderedContent);
    return this;
  }
})