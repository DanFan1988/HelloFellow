HF.Views.BoardShow = Backbone.View.extend({

  initialize: function(options){

  },

  events: {
    "click #flip-card": "flipCard",
    "click #rename-title": "renameTitle",
    "click #delete-list": "deleteList",
    "click #create-list": "createList"
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
      })
      that.$el.find('#insert-list').append(listView.render().$el)
    })
  },

  flipCard: function(event){
    event.preventDefault();
    console.log(event)
    var cardView = new HF.Views.cardView({
      // pass the card
    })
    $(event.target).html(cardView.render());
  },

  renameTitle: function(event){
    event.preventDefault();
    console.log(event)
    var renameView = new HF.Views.BoardForm

    $(event.target).html(renameView.render())

    this.model.save(data, { success: function(){
      //render new view
      }
    })
  },

  deleteList: function(event){
    event.preventDefault();
    //can i pull from event or do i need to pass a data-id and get?
  },

  deleteCard: function(event){
    event.preventDefault();
  },

  createList: function(event){
    var newList = new HF.Model.List({
      board_id: this.model.id
    });
    // newList.collection = HF.Data.lists
    // newList.fetch({
    //   success: //do i needs this? Can i just use listenTo?
    // })
  },

  renderSidebar: function(){

  }

})