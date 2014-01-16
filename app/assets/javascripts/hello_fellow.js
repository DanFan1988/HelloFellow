window.HF = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Data: {},
  initialize: function() {
    HF.Data.lists = new HF.Collections.Lists
    HF.Data.lists.fetch();

    HF.Data.cards = new HF.Collections.Cards
    HF.Data.cards.fetch();

    HF.Data.boards = new HF.Collections.Boards
    HF.Data.boards.fetch({
      success: function(){
        new HF.Routers.Router({ $rootEl: $('#container')});
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  HF.initialize();
});
