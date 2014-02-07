HF.Views.UserSearch = Backbone.View.extend({
	
	initialize: function(options){
		this.users = options.users
	},

	events: {
		"click .user-select": "userSelect"
	},

	template: JST['header/user_search'],

  render: function(){
  	console.log(this.users)
  var renderedContent = this.template({
    users: this.users
  });
  this.$el.closest('div').html()
  this.$el.html(renderedContent);
  return this;
  },

  userSelect: function(event){
  	event.preventDefault();
  	var friendId = $(event.target).data('id')
    var newFriend = new HF.Models.Friendship
    newFriend.set({friend_id: friendId})
    HF.currentUser().get('friendships').create(newFriend, {parse: true, wait: true})
    // find user do some join table 
  	// magic render that SHIT SOMEWHERE
  }

});