HF.Views.CardForm = Backbone.View.extend({
  tagName: 'form',
  className: 'form',
  template: JST['card/form'],

  initialize: function (options) {
    this.list_id = options.list_id;
    this.list = options.list;
  },

  events: {
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
    attrs.order = (this.collection.last() && this.collection.last().get('order') + 1) || 1;
    this.collection.create(attrs, { parse: true, wait: true });
  }
})