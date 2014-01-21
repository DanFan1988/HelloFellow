HF.Views.HeaderBoards = Backbone.View.extend({
  initialize: function(options){
    this.$el = options.$el
    // this.listenTo(HF.Data.boards, "add", this.render)
  },

  render: function(){
    this.$el.html(this.$el)
  }


})