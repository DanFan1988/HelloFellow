HF.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",
  model: HF.Models.Board,

  getList: function (listId) {
    var list;
    HF.Data.boards.each(function(board){
      list = list || board.get('lists').get(listId);
    });

    return list;
  }
})

