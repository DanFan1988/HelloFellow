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
      collection: HF.Data.boards
      // lists: HF.Data.lists,
      // cards: HF.Data.cards
    })
    this._swapView(view)
  },

  userShow: function(id){
    var user = HF.Data.users.get(id)
    var view = new HF.Views.UserShow({
      model: user
    })
    this._swapView(view)
  },

  _swapView: function (view) {
    console.log("SWAPING DA VIEW")
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})


//error function(xhr, textStatus, errorThrown)
//console.log(xhr.responseJSON)
// find "name" under it is "cant be blank" make that shit red