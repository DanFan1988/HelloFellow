HF.Views.HeaderShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(HF.Data.boards, "add", this.render)
  },

  events: {
    "submit #member-search": "memberSearch"
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
    event.preventDefault();

    var username = this.$('#member-username').val();

    var members = HF.Data.users.filter(function(user){
      return new RegExp("^" + username).test(user.get('username'))
    });

    
    
  }
});