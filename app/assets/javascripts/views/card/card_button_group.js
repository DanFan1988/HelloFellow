HF.Views.CardButtonGroup = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model.get('label'), "sync", this.render)
  },

  events:{
    "submit #edit-card-title": "editTitle",
    "click button.card-label": "editLabel"
  },

  template: JST['card/button_group'],

  render: function(){
    var renderedContent = this.template({
      boards: HF.Data.boards
    })
    this.$el.html(renderedContent);
    this._renderLabel();
    return this;
  },

  _renderLabel: function(){
    var that = this;
     this.model.get('label') && this.model.get('label').each(function(label){
      var label = new HF.Views.CardLabel({
        card: this.model,
        model: label
      })
      that.$el.find('#render-label').html(label.render().$el)
    })
  },

  editLabel: function(event){
    console.log("LABELING")
    event.preventDefault()
    var color = event.target.id
    var newLabel = new HF.Models.Label({
      color: color,
      card_id: this.model.id
    })
    if (newLabel.isNew()) {
      this.model.get('label').create(newLabel);
    } else {
      newLabel.save({});
    }
  }

})