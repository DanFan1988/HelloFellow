HF.Views.boardShow = Backbone.View.extend({

  initialize: function(options){
    this.lists = options.lists
    this.cards = options.cards
  },

  events: {
    "casd": "flipCard",
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
    //how to have multiple templates / is this the best way to organize?

  },

  renameTitle: function(event){
    event.preventDefault();
    $(event.target).text()

    this.model.save(data, { success: function(){
      //render new view
      }
    })
  }
})