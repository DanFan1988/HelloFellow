HF.Views.ListShow = Backbone.View.extend({
  initialize: function(options){
    this.parent = options.parent
    this.board = options.board
    this.$modal_container = options.$modal_container

    this.listenTo(this.model.get('cards'), "add destroy remove", this.render);
    this.listenTo(this.model, "change:title", this.render);

    this.listenTo(this.model, "destroy", HF.Activity.Delete);
    this.$el.attr('data-list-id', this.model.id);

    this.on("modal:opened", this.disableSortable)
    this.on("modal:closed", this.modalCloseTrigger)

  },

  className: 'col-xs-3 list-background',

  events: {
    "click button#show-card-form": "showCardForm",
    "click #delete-list": "deleteList",
    "click #open-list-title-edit-form": "editListTitleForm",
    "sortstop": "_reorderCard"
  },

  template: JST['list/show'],

  render: function(){
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

  _renderCardsButtons: function(){
    var that = this;
    this.model.get('cards').each(function(card){
      var cardView = new HF.Views.CardButtonShow({
        model: card,
        collection: that.model.get('cards'),
        list_id: that.model.id,
        parent: that,
        $modal_container: that.$modal_container
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