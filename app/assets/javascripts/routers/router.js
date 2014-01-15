HF.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl; // questionable decision
  }

  routes: {
    '': 'index'
    '/api/boards/new': 'boardNew'
    '/api/boards/:id': 'boardShow'
    '/api/boards/:id/edit': 'boardEdit'
  },

  boardNew: function(){
    var view = new HF.Views
  },

  boardShow: function(){

  },

  boardEdit: function(){

  },








  _swapView: function(view) {
    this._currentView & this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})