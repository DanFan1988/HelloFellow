HF.Views.CardForm = Backbone.View.extend({
  tagName: 'form',
  className: 'form',
  template: JST['card/form'],

  initialize: function (options) {
    this.list_id = options.list_id
    console.log(this.list_id)
    // if(!this.model.get('gist_files')) {
    //   this.model.set({ 'gist_files' : new GC.Collections.GistFiles() });
    // }
    // this.listenTo(this.model.get('gist_files'), 'add', this.render);
  },

  events: {
    'submit': 'submit', //use that event thingy from bootstrap
    'click #add-card': 'addCard'
  },

  render: function(){
    var renderedContent = this.template({
    card: this.model,
    list_id: this.list_id
    });
    this.$el.html(renderedContent);
    return this;
  },

  addCard: function(event){
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    // //
    // function success (data) {
    //   console.log(data)
    //   // Backbone.history.navigate("", { trigger: true });
    // }
    this.model = new HF.Models.Card

    this.model.set(attrs);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        // success: success
      });
    } else {
      this.model.save({}, {
        // success: success
      });
    }
  }


  //   console.log("adding file")
  //   event.preventDefault();
  //   var attrs = this.$el.serializeJSON();
  //   console.log(attrs)
  //   debugger
  //
  //   var newCard = new HF.Models.Card
  //   newCard.set(attrs)
  //   newCard.collection = this.collection
  //   newCard.save({}, { success: console.log("you did it!") })
  // }

  //   this.model.set(attrs);
  //   this.model.collection = this.collection
  //   this.model.save({}, {
  //     success: function () {
  //       console.log("success")
  //       // Backbone.history.navigate("", { trigger: true });
  //     }
  //   });
  // }
})