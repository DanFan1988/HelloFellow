HF.Views.ActivityShow = Backbone.View.extend({

  initialize: function(){

  },

  events:{},

  template: JST['activity/show'],

  render: function(){
    var content = this.template({
      activity: this.model
    })
    this.$el.append(content)
    return this;
  }
});