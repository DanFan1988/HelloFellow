HF.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "userBoards",
    "api/boards/:id": "boardShow"
  },

  userBoards: function(){
    var view = new HF.Views.userBoards
    this._swapView(view)
  },

  boardShow: function(id){
    var board = HF.Data.board.get(id)
    var view = new HF.Views.boardShow({
      model: board
    })
    this._swapView(view)
  },










  _swapView: function(view) {
    this._currentView & this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})