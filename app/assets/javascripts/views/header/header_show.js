HF.Views.HeaderShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(HF.Data.boards, "add", this.render)
  },

  events: {
    "click #member-search": "memberSearch",

  },

  template: JST['header/header'],

  render: function(){
    var renderedContent = this.template({
      boards: this.collection
    })
    this.$el.html(renderedContent)
    return this;
  },

  memberSearch: function(event){
    var username = this.$('#member-username').val();

    var allMembers = HF.Data.users.filter(function(user){
      return new RegExp("^" + username, "i").test(user.get('username'))
    });

    var friends = []
    HF.currentUser().get('friendships').each(function(friendship){
      friends.push(HF.Data.users.get(friendship.get('friend_id')))
    })

    var nonFriends = []
    allMembers.forEach(function(member){
      if(friends.indexOf(member) === -1){
        nonFriends.push(member)
      }
    })

    var view = new HF.Views.UserSearch({
      users: nonFriends
    })
    this.$('#member-insert').html(view.render().$el)
  },


});