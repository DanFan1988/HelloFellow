HF.Views.ListShow = Backbone.View.extend({

  events: {
  },

  template: JST['list/show'],

  render: function(){
      var renderedContent = this.template({
      lists: this.collection
      })
    this.$el.html(renderedContent);
    return this;
  }
})