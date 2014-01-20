HF.Views.EditCardTitle = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(this.model, "change:title", this.render)
    this.callback = options.success
  },

  events:{
    "submit #edit-card-title": "editTitle"
  },

  template: JST['card/edit_title'],

  render: function(){
    var renderedContent = this.template({
      card: this.model
      })
    this.$el.html(renderedContent);
    return this;
  },

  editTitle: function(event){
    console.log("we here?")
    event.preventDefault();
    var attrs = this.$('#edit-card-title').serializeJSON();
    this.model.set(attrs);
    debugger;
    this.model.save({})

    // $('#CardModal' + this.model.id).modal('hide');
    // $('body').removeClass('modal-open');
    // $('.modal-backdrop').remove();
    // $('#CardModal' + this.model.id).modal('show');
  }
})