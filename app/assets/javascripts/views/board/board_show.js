HF.Views.BoardShow = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model.get('lists'), "destroy", this.render)
  },

  events: {
    "click #rename-title": "renameTitle",
    "click #add-list": "addList"
  },

  template: JST['board/show'],

  render: function(){
      var renderedContent = this.template({
      board: this.model,
      })
    this.$el.html(renderedContent);
    this._renderLists()
    return this;
  },

  _renderLists: function(){
    var that = this;
    this.model.get('lists').each(function(list){
      console.log("making a list")
      var listView = new HF.Views.ListShow({
        model: list
      });
      that.$el.find('#insert-list').append(listView.render().$el);
    })
  },

  addList: function(){

  },

  renameTitle: function(event){ //editting
    event.preventDefault();
    console.log(event)
    var renameView = new HF.Views.BoardForm

    $(event.target).html(renameView.render())

    this.model.save(data, { success: function(){
      //render new view
      }
    })
  },



  //
  //
  // deleteCard: function(event){
  //   event.preventDefault();
  // },
  //
  // createList: function(event){
  //   var newList = new HF.Model.List({
  //     board_id: this.model.id
  //   });
  //   // newList.collection = HF.Data.lists
  //   // newList.fetch({
  //   //   success: //do i needs this? Can i just use listenTo?
  //   // })
  // },
  //
  // renderSidebar: function(){
  //
  // }

})