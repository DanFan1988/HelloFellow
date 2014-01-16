HF.Views.boardShow = Backbone.View.extend({

  initialize: function(options){
    this.lists = options.lists
    this.cards = options.cards
  },

  events: {
    "click #flip-card": "flipCard",
    "click #rename-title": "renameTitle"
  },

  template: JST['board/show'],

  render: function(){
    var renderedContent = this.template({
      board: this.model,
      lists: this.lists,
      cards: this.cards
      })
    this.$el.html(renderedContent);
    return this;
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
    var renameView = new HF.Views.BoardForm

    $(event.target).html(renameView.render())

    this.model.save(data, { success: function(){
      //render new view
      }
    })
  }
})