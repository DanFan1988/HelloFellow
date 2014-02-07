HF.Views.Sidebar = Backbone.View.extend({

  initialize: function(){
    this.listenTo(HF.Data.activities, "add", this.render)
    this.listenTo(HF.currentUser().get('friendships'), "add", this.render)
  },
  
  template: JST['sidebar/sidebar'],

  render: function(){
    var friendships = HF.currentUser().get('friendships')

    var friends = []
    friendships.each(function(friend){
      friends.push(HF.Data.users.get(friend.get('friend_id')))
    })
    var content = this.template({
      friendships: friendships
    })
    this.$el.html(content)
    this._renderActivities()
    return this;
  },

  _renderActivities: function(){
    var that = this;
    HF.Data.activities.each(function(activity){
      var activityView = new HF.Views.ActivityShow({
        model: activity
      });
      that.$el.find('#insert-activity').append(activityView.render().$el)
    });
  }
});

