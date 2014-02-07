HF.Models.User = Backbone.Model.extend({
  parse: function (data) {
    // var boards = data.boards;
    // data.boards = new HF.Collections.Boards(boards, { list_id: data.id, parse: true })
    // return data;

    var friendships = data.friendships;
    data.friendships = new HF.Collections.Friendships(friendships, { user_id: data.id, parse: true })
    return data;
  }
})