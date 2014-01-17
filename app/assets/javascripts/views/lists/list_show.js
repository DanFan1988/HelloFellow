HF.Views.ListShow = Backbone.View.extend({

  initialize: function(){},

  events: {
    "click #delete-list": "deleteList"
    "click #create-card": "createCard"
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
        list_id: that.model.id
      });
      that.$el.find('#insert-card').append(cardView.render().$el);
    });
  },

  deleteList: function(event){
    event.preventDefault();
  	this.model.destroy();
  },

  createCard: function(event){
    event.preventDefault();

    var data = $(event.currentTarget).serializeJSON();
    var board_id = this.model.id

    this.model
  }

})

	event.preventDefault();

	var data = $(event.currentTarget).serializeJSON();
	var title = data.list.title;
	var board_id = this.model.id

	this.model.get('lists').create(
		{title: title, board_id: board_id},
		{wait: true});

	$('#newList').modal('hide');
	$('.modal-backdrop').remove();
	$('body').removeClass('modal-open');
},