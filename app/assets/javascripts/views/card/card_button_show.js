HF.Views.CardButtonShow = Backbone.View.extend({
  initialize: function(options){
    //has model, collection
    this.list_id = options.list_id;
    this.parent = options.parent
    this.$modal_container = options.$modal_container

    this.on('modal:closed', this.render)
    this.on('modal:closed', this.modalCloseTrigger)
    this.listenTo(this.model, "change:order", this.render)
  },

  events: {
    "click #open-modal": "_renderCardModal",
    "show.bs.modal": "disableSortable"
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
    this.$modal_container.append(modal.render().$el)
    $('.card-sortable').sortable("disable")
    return this;
  },

  modalCloseTrigger: function(){
    this.parent.trigger('modal:closed')
    $('.card-sortable').sortable("enable")

  },

  disableSortable: function(){
    this.parent.trigger('modal:opened')
  }
});