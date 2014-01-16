HF.Views.BoardShow = Backbone.View.extend({

  initialize: function(options){
    this.lists = options.lists
    this.cards = options.cards
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
      // lists: this.model.get('lists'),
      // cards: this.model.get('lists').first.get('cards')
      })
    this.$el.html(renderedContent);
    this._renderList()
    return this;
  },

  _renderList: function(){
    new listView = new HF.View.ListShow({
      collection: this.model.get('lists')
    });
    this.$el.find('#insert-view').html(listView.render().$el)
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