HF.Views.BoardShow = Backbone.View.extend({
  initialize: function(options){
    var that = this
    this.listenTo(this.model.get('lists'), "add destroy", this.render)
    this.listenTo(this.model, "add change", this.render);
    //
    // this.model.get('lists').each(function(list){
    //   that.listenTo(list.get('cards'), "add", that.render)
    // });


    this.listenTo(this.model.get('lists'), "add",
    HF.Activity.Add)
    this.listenTo(this.model, "change:title", HF.Activity.Edit.bind(this.model));
    this.childViews = [];
  },

  events: {
    "submit #new-title-form": "renameTitle",
    "click #add-list": "addList",
    "click #add-comment": "addComment",
    // "sortstop": "reorderCard"
  },


  template: JST['board/show'],

  render: function () {
    var renderedContent = this.template({
      board: this.model,
    });
    this.$el.html(renderedContent);
    this._renderLists()
    this._renderSidebar()
    this.$el.find('#sortable-list').sortable()
    // this.$el.find( "#sortable-card73, #sortable-card74" ).sortable({
    //       connectWith: ".connectedSortable",
    //       handle: 'button',
    //       cancel: '',
    //       dropOnEmpty: false,
    //       recieve: function(event, ui){ console.log('recieved')}
    //     }).disableSelection();
    // this.model.get('lists').each(function(list){
    //
    // })
    return this;
  },

  reorderCard: function(event, ui){
    var $item = $(ui.item);
    var movedCardID = $item.find('button').data('card-id');
    var aboveCardID = $item.prev().find('button').data('card-id');
    var belowCardID = $item.next().find('button').data('card-id');

    var movedCard
    var aboveCard
    var belowCard

    this.model.get('lists').each(function(list){
      var cards = list.get('cards');

      movedCard = movedCard || cards.get(movedCardID);
      aboveCard = aboveCard || cards.get(aboveCardID);
      belowCard = belowCard || cards.get(belowCardID);
    })

    // var cards = this.model.get('cards');
    // var movedCard = cards.get(movedCardID);
    // var aboveCard = cards.get(aboveCardID);
    // var belowCard = cards.get(belowCardID);
    console.log(movedCard.get('order'), belowCard, aboveCard)

    var newOrderVal;
    if (aboveCard && belowCard) {
      newOrderVal = (aboveCard.get('order') + belowCard.get('order')) / 2.0;
    } else if (aboveCard) {
      newOrderVal = aboveCard.get('order') + 1.0;
    } else if (belowCard) {
      newOrderVal = belowCard.get('order') / 2.0;
    } else {
      newOrderVal = 1.0;
    }

    movedCard.set('order', newOrderVal);
    movedCard.save();
  },

  _renderLists: function () {
    this.clearChildViews();

    var that = this;
    this.model.get('lists').each(function(list){
      var listView = new HF.Views.ListShow({
        model: list
      });
      that.$el.find('#insert-list').append(listView.render().$el);
      that.childViews.push(listView);
    })
  },

  _renderSidebar: function () {
    var sidebar = new HF.Views.Sidebar
    this.$el.find('#insert-sidebar').html(sidebar.render().$el)
  },

  addList: function(){
    event.preventDefault();
    var attrs = this.$('#add-list-form').serializeJSON();
    this.model.get('lists').create(attrs, {parse: true, wait:true});

  },

  renameTitle: function(event){
    event.preventDefault();
    var that = this;
    var attrs = this.$('#new-title-form').serializeJSON();
    this.model.set(attrs)
    this.model.save({},{ parse: true})
  },

  addComment: function(event){

  },

  clearChildViews: function () {
    this.childViews.forEach(function (view) { view.remove() });
  }


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