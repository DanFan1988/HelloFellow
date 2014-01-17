HF.Views.DropdownAdd = Backbone.View.extend({

  initialize: function(options){
    this.$el = options.$el
  },

  events:{
    "click #new-board": "newBoardForm"
  },

  template: JST['dropdown/add_board'],

  // render: function(renderedContent){
  //   this.$el.remove()
  //   this.$el.html(renderedContent);
  //   return this;
  // },

  newBoardForm: function(){
    console.log("making new board form")
    var content = this.template()
    this.$el.find('dropdown-menu').append(content)
  }
})
