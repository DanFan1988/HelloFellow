HF.Views.CardButtonGroup = Backbone.View.extend({

events:{
  "submit #edit-card-title": "editTitle"
  "click #card-move": "move"
},

template: JST['card/button_group'],

render: function(){
  console.log("here?")
  var renderedContent = this.template()
  this.$el.html(renderedContent);
  return this;
},

move: function(){
  console.log("moving")
}



})