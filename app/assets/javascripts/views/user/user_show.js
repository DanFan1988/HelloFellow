HF.Views.UserShow = Backbone.View.extend({
	//has model
	template: JST['user/profile'],

	render: function(){
      var renderedContent = this.template({
      	user: this.model
      })
    this.$el.html(renderedContent);
    return this;
  },

})