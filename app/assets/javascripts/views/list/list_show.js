HF.Views.ListShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model.get('cards'), "add remove reset", this.render);
    this.listenTo(this.model, "change", this.render);

    this.listenTo(this.model.get('cards'), "add", HF.Activity.Add);
    this.listenTo(this.model.get('cards'), "change:order", HF.Activity.Move)
    this.listenTo(this.model, "destroy", HF.Activity.Delete);
  },

  events: {
    "click button#show-card-form": "showCardForm",
    "click #delete-list": "deleteList",
    "click #open-list-title-edit-form": "editListTitleForm",
    "sortstop": "reorderCard"
  },

  template: JST['list/show'],

  render: function(){
    var renderedContent = this.template({
      list: this.model
    });
    this.$el.html(renderedContent);
    this.$el.find('.card-sortable').sortable({
      handle: 'button',
      cancel: ''
    })
    this._renderCardsButtons();
    return this;
  },

  _renderCardsButtons: function(){
    var that = this;
    this.model.get('cards').each(function(card){
      var cardView = new HF.Views.CardButtonShow({
        model: card,
        collection: that.model.get('cards'),
        list_id: that.model.id,
      });
      that.$('.insert-card').append(cardView.render().$el);
    });
  },

  reorderCard: function(event, ui){
    var $item = $(ui.item);
    var movedCardID = $item.find('button').data('card-id');
    var aboveCardID = $item.prev().find('button').data('card-id');
    var belowCardID = $item.next().find('button').data('card-id');

    var cards = this.model.get('cards');
    var movedCard = cards.get(movedCardID);
    var aboveCard = cards.get(aboveCardID);
    var belowCard = cards.get(belowCardID);

    var newOrderVal;
    if (aboveCard && belowCard) {
      newOrderVal = (aboveCard.get('order') + belowCard.get('order')) / 2;
    } else if (aboveCard) {
      newOrderVal = aboveCard.get('order') + 1;
    } else if (belowCard) {
      newOrderVal = belowCard.get('order') / 2;
    } else {
      newOrderVal = 1;
    }

    movedCard.set('order', newOrderVal);
    movedCard.save();
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

});


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