HF.Views.userBoard = Backbone.View.extend({

  events:{},

  templates: JST['board/index'],

  render: function(){
    var renderedContent = this.template({
      boards: this.collection
    })
    this.$el.html(renderedContent);
    return this;
  },
})