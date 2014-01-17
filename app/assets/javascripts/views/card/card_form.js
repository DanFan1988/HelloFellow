GC.Views.CardForm = Backbone.View.extend({
  tagName: 'form',
  className: 'form',
  template: JST['card/form'],

  initialize: function () {
    // if(!this.model.get('gist_files')) {
    //   this.model.set({ 'gist_files' : new GC.Collections.GistFiles() });
    // }
    // this.listenTo(this.model.get('gist_files'), 'add', this.render);
  },

  events: {
    'submit': 'submit', //use that event thingy from bootstrap
    'click #add-file': 'addFile'
  },

  render: function(){
    var renderedContent = this.template({
    card: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
})