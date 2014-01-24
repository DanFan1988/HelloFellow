HF.Views.HeaderShow = Backbone.View.extend({
  intitialize: function(){
    this.listenTo(this.collection, "sync", this.render)
  },

  events: {},

  template: JST['header/header'],

  render: function(){
    console.log("rendering")
    var renderedContent = this.template({
      boards: this.collection
    })
    this.$el.html(renderedContent)
    return this;
  }




})