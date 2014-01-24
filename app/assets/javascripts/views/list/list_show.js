HF.Views.ListShow = Backbone.View.extend({
  initialize: function(options){
    this.parent = options.parent
    this.board = options.board

    this.listenTo(this.model.get('cards'), "add destroy remove", this.render);
    this.listenTo(this.model, "change:title", this.render);

    this.listenTo(this.model.get('cards'), "add", HF.Activity.Add);
    this.listenTo(this.model, "destroy", HF.Activity.Delete);
    this.$el.attr('data-list-id', this.model.id);
    // this.on("modal:closed", this.swap) //or enable
    this.on("modal:opened", this.disableSortable)
    this.on("modal:closed", this.modalCloseTrigger)

  },

  className: 'col-xs-3 list-background',

  events: {
    "click button#show-card-form": "showCardForm",
    "click #delete-list": "deleteList",
    "click #open-list-title-edit-form": "editListTitleForm",
    // "sortreceive": "_dragOverCard",
    "sortstop": "_reorderCard"
        // "sortremove": "_removeMovedCard"
    // "sortupdate": "_sortMethodChooser"

  },

  template: JST['list/show'],

  render: function(){
    console.log("rendering list", this.model.id)
    var that = this
    var renderedContent = this.template({
      list: this.model
    });
    this.$el.html(renderedContent);
    this.$el.find('.card-sortable').sortable({
      connectWith: ".card-sortable",
      dropOnEmpty: true,
      cursor: "move",
      opacity: 0.5,
      tolerance: "pointer"
    })
    this._renderCardsButtons();
    return this;
  },

  swap: function(){
    this.$el.find('.insert-card').empty()
    this._renderCardsButtons();
  },

  _dragOverCard: function (event, ui) {
    var $item = $(ui.item);

    var movedCardID = $item.find('#open-modal').data('card-id');
    var aboveCardID = $item.prev().find('#open-modal').data('card-id');
    var belowCardID = $item.next().find('#open-modal').data('card-id');

    var fromListID = $item.find('#open-modal').data('list-id')

    var cards = HF.Data.boards.getList(fromListID).get('cards')
    var movedCard = cards.get(movedCardID);
    var aboveCard = this.model.get('cards').get(aboveCardID);
    var belowCard = this.model.get('cards').get(belowCardID);

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
    movedCard.set('list_id', this.model.id)
    // console.log(movedCard.get('order'), belowCard.get('order'), aboveCard.get('order'))

    movedCard.save({}, {parse: true, wait: true});
  },

  _reorderCard: function(event, ui){
    var $item = $(ui.item);
    var movedCardID = $item.find('#open-modal').data('card-id');
    // button?
    var aboveCardOrder = $item.prev().find('#open-modal').data('order');
    var belowCardOrder = $item.next().find('#open-modal').data('order');

    var cards = this.model.get('cards');
    var movedCard = cards.get(movedCardID);

    var listID = $item.parent().parent().data('list-id')
    console.log(listID)
    // if (!movedCard || this.model.id != movedCard.get('list_id')) {
    //   return;
    // }
    //
    //
    // var aboveCard = cards.get(aboveCardID);
    // var belowCard = cards.get(belowCardID);
    var newOrderVal;
    if (aboveCardOrder && belowCardOrder) {
      newOrderVal = (aboveCardOrder + belowCardOrder) / 2.0;
      console.log(aboveCardOrder, belowCardOrder)
    } else if (aboveCardOrder) {
      newOrderVal = aboveCardOrder + 1.0;
    } else if (belowCardOrder) {
      newOrderVal = belowCardOrder / 2.0;
    } else {
      console.log("we are setting order =1")
      newOrderVal = 0.5;
    }
    console.log(newOrderVal)
    movedCard.set('list_id', listID)
    movedCard.set('order', newOrderVal);

    this.model.get('cards').remove(movedCard)
    HF.Data.boards.getList(listID).get('cards').add(movedCard)
    console.log(this.model.id)

    movedCard.save({}, {
      success: function(){
        console.log(movedCard.get('labels'))

      }
    });
  },
  //
  // _removeMovedCard: function(event, ui){
  //   var $item = $(ui.item);
  //   var movedCardID = $item.find('#open-modal').data('card-id');
  //   var cards = this.model.get('cards');
  //   var movedCard = cards.get(movedCardID);
  //   movedCard.destroy()
  // },

  _renderCardsButtons: function(){
    var that = this;
    this.model.get('cards').each(function(card){
      var cardView = new HF.Views.CardButtonShow({
        model: card,
        collection: that.model.get('cards'),
        list_id: that.model.id,
        parent: that
      });
      that.$('.insert-card').append(cardView.render().$el);
    });
  },

  editListTitleForm: function(event){
    console.log("we ehre")
    event.preventDefault();
    var editTitle = new HF.Views.EditListTitle({
      model: this.model,
      collection: this.collection
    })
    this.$el.find("#edit-list-title-form").html(editTitle.render().$el)
    $("#title-text").focus()
  },

  deleteList: function(event){
    event.preventDefault();
    this.model.destroy();

    $('#DeleteListModal' + this.model.id).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  },


  showCardForm: function(){
    var cardForm = new HF.Views.CardForm({
      collection: this.model.get('cards'),
      list_id: this.model.id,
      list: this.model
    });
    this.$el.find('#place-card-form').html(cardForm.render().$el)
  },

  disableSortable: function(){
    this.parent.trigger("modal:opened")
  },

  modalCloseTrigger: function(){
    this.parent.trigger("modal:closed")
  }

});


// this.model == list that was dragged to
// ui.item is the card li that was dragged

// You have the list you dragged to.
// You have the list-id you dragged from.
// You have the model id.

// You can find the list given the list id.
// Given the list and a card id, you can find the card.

// Change card.list_id to the list you dragged to.
// Change card.order to the average
// Save.

// Maybe you have to rerender the other list view??

// submit: function (event) {
//   event.preventDefault();
//   var attrs = this.$el.serializeJSON();
//   this.model.set(attrs);
//   this.model.collection = this.collection
//   this.model.save({}, {
//     success: function () {
//       Backbone.history.navigate("", { trigger: true });
//     }
//   });
// }
//
//   event.preventDefault();
//
//   var data = $(event.currentTarget).serializeJSON();
//   var title = data.list.title;
//   var board_id = this.model.id
//
//   this.model.get('lists').create(
//     {title: title, board_id: board_id},
//     {wait: true});
//
//   $('#newList').modal('hide');
//   $('.modal-backdrop').remove();
//   $('body').removeClass('modal-open');
// },