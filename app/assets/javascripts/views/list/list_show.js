HF.Views.ListShow = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model.get('cards'), "sync", this.render)
  },

  events: {
    "click button#show-card-form": "showCardForm",
    "click #delete-list": "deleteList"
  },

  template: JST['list/show'],

  render: function(){
    var renderedContent = this.template({
      list: this.model
    });
    this.$el.html(renderedContent);
    this._renderCards();
    return this;
  },

  _renderCards: function(){
    var that = this;
    this.model.get('cards').each(function(card){
      var cardView = new HF.Views.CardShow({
        model: card,
        collection: that.model.get('cards'),
        list_id: that.model.id
      });
      that.$el.find('#insert-card').append(cardView.render().$el);
    });
  },

  deleteList: function(event){
    event.preventDefault();
  	this.model.destroy();
  },

  // createCard: function(event){
  //   event.preventDefault();
  //   var that = this;
  //
  //   var newCard = new HF.Models.Card({
  //     title: "new card",
  //     list_id: this.model.id
  //   })
  //   newCard.save({}, {
  //     success: function () {
  //       that.model.get('cards').add(newCard)
  //     }
  //   })
  // },

  showCardForm: function(){
    console.log("making cardform")
    var cardForm = new HF.Views.CardForm({
      collection: this.model.get('cards'),
      list_id: this.model.id
    })
    this.$el.find('#place-card-form').append(cardForm.render().$el)
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