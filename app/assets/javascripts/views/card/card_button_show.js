HF.Views.CardButtonShow = Backbone.View.extend({
  initialize: function(options){
    //has model, collection
    this.list_id = options.list_id;
    this.on('modal:closed', this.render)
  },

  events: {
    "click #open-modal": "_renderCardModal"
  },

  template: JST['card/show_button'],

  render: function(){
    var renderedContent = this.template({
      card: this.model,
      list_id: this.list_id
    });
    this.$el.html(renderedContent);
    return this;
  },

  _renderCardModal: function(){
    var modal = new HF.Views.CardModalShow({
      model: this.model,
      collection: this.collection,
      list_id: this.list_id,
      parent: this
    })
    this.$el.append(modal.render().$el)
  }
});