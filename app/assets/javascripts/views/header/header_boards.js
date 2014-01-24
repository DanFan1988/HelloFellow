HF.Views.HeaderBoards = Backbone.View.extend({
  initialize: function(options){
    this.$el = options.$el
  },

  render: function(){
    this.$el.html(this.$el)
  }


})