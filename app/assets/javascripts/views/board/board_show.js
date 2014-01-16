HF.Views.boardShow = Backbone.View.extend({

  initialize: function(options){
    this.posts = options.posts
    this.cards = options.cards
  },

  events: {
    "click button.flipCard": "flipCard",
    "click button.change-board-title": "changeTitle"
  },

  templates: JST['board/show'],

  render: function(){
    var renderedContent = this.template({
      board: this.model,
      posts: this.posts,
      cards: this.cards
      })

    this.$el.html(renderedContent);

    return this;
  },

  flipCard: function(event){
    event.preventDefault();
    //how to have multiple templates / is this the best way to organize?

  },

  changeTitle: function(event){
    event.preventDefault();
    var data = this.$el.serializeJSON();
    $(event.target).text(someval in here)

    this.model.save(data, { success: function(){
      //render new view
      }
    })
  }
})