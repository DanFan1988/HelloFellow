HF.Views.HeaderShow = Backbone.View.extend({
  intitialize: function(){

  },

  events: {},

  template: JST['header/header'],

  render: function(){
    var renderedContent = this.template({
      boards: HF.Data.boards
    })
    this.$el.html(renderedContent)
    return this;
  },




})