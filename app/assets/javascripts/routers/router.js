HF.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "userBoards",
    "boards/:id": "boardShow",
    "users/:id": "userShow"
  },

  userBoards: function(){
    var view = new HF.Views.userBoards({
      collection: HF.Data.boards
    });
    this._swapView(view)
  },

  boardShow: function(id){
    console.log("showing da board")
    var board = HF.Data.boards.get(id)
    var view = new HF.Views.BoardShow({
      model: board,
      // lists: HF.Data.lists,
      // cards: HF.Data.cards
    })
    this._swapView(view)
  },

  _swapView: function (view) {
    console.log("SWAPING DA VIEw")
    console.log('adskfjalj;f')
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})