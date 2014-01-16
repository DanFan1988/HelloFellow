HF.Views.userBoards = Backbone.View.extend({

  events:{
  	"click create-board": "createBoard"
  },

  template: JST['board/index'],

  render: function(){
    var renderedContent = this.template({
      boards: this.collection
    })
    this.$el.html(renderedContent);
    return this;
  },

  createBoard: function(){
  	var newBoard = new HF.Models.Board
  	newBoard.collection = HF.Data.boards
  	var newBoard.fetch({
  		var newMembership = new HF.Models.BoardMemberships
  		// finish this
  	})
  }
})