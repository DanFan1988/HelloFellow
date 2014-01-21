window.HF = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Data: {},
  currentUser: function () {
    return HF.Data.users.get(HF.currentUserId);
  },
  initialize: function() {
    HF.Data.users = new HF.Collections.Users
    HF.Data.users.fetch();

    HF.Data.organizations = new HF.Collections.Organizations
    HF.Data.organizations.fetch();

    HF.Data.boards = new HF.Collections.Boards
    HF.Data.boards.fetch({
      success: function(){
        new HF.Routers.Router({ $rootEl: $('#container')});
        Backbone.history.start();
      }
    });
  }
};



// user_id = board.get('lists').first().get('cards').first().get('comments').first().get('user_id')

// board.get('members').get(user_id)



