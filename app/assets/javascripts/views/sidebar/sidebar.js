HF.Views.Sidebar = Backbone.View.extend({

  initialize: function(){
    this.listenTo(HF.Data.activities, "add", this.render)
  },

  events: {},

  template: JST['sidebar/sidebar'],

  render: function(){
    var content = this.template()
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

