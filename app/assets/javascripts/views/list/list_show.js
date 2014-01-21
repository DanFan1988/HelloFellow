HF.Views.ListShow = Backbone.View.extend({
  initialize: function(){
    that = this;
    this.listenTo(this.model.get('cards'), "add destroy", this.render)
    //global variable and stop listening?
    this.listenTo(this.model, "add", this.render);
  },

  events: {
    "click button#show-card-form": "showCardForm",
    "click #delete-list": "deleteList",
    "click #open-list-title-edit-form": "editListTitleForm",
  },

  template: JST['list/show'],

  render: function(){
    var renderedContent = this.template({
      list: this.model
    });
    this.$el.html(renderedContent);
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
      that.$el.find('#insert-card').append(cardView.render().$el);
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
  },

  deleteList: function(event){
    event.preventDefault();
    this.model.destroy();

    $('#DeleteListModal' + this.model.id).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  },


  showCardForm: function(){
    console.log("making cardform")
    var cardForm = new HF.Views.CardForm({
      collection: this.model.get('cards'),
      list_id: this.model.id,
      magic: this
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