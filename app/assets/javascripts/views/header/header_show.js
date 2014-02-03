HF.Views.HeaderShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(HF.Data.boards, "add", this.render)
  },

  template: JST['header/header'],

  render: function(){
    var renderedContent = this.template({
      boards: this.collection
    })
    this.$el.html(renderedContent)
    return this;
  }
})