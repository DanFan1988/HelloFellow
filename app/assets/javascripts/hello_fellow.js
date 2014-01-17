window.HF = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Data: {},
  initialize: function() {
    // HF.Data.users = new HF.Collections.Users
    // HF.Data.users.fetch();

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


// user_id = board.get('lists').first().get('cards').first().get('comments').first().get('user_id')

// board.get('members').get(user_id)



