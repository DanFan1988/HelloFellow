HF.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$modal_container = options.$modal_container;
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

  boardShow: function(id) {
    var board = HF.Data.boards.get(id);
    var view = new HF.Views.BoardShow({
      model: board,
      collection: HF.Data.boards,
      $modal_container: this.$modal_container
    })
    this._swapView(view);
  },

  userShow: function(id){
    var user = HF.Data.users.get(id)
    var view = new HF.Views.UserShow({
      model: user
    })
    this._swapView(view)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})