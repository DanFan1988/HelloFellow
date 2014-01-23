HF.Views.CardButtonGroup = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model.get('labels'), "sync", this.render)
  },

  events:{
    "submit #edit-card-title": "editTitle",
    "click button.card-label": "editLabel",
    "submit #submit-checklist": "createChecklist",
    "open-checklist-item-form": "openChecklistItemForm"
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
     this.model.get('labels') && this.model.get('labels').each(function(label){
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
      this.model.get('labels').create(newLabel);
    } else {
      newLabel.save({}, {parse: true});
    }
  },

  createChecklist: function(event){
    console.log("making a CHECKLIST")
    event.preventDefault();
    var attrs = this.$('#submit-checklist').serializeJSON();
    var newChecklist = new HF.Models.Checklist({
      card_id: this.model.id
    })
    newChecklist.set(attrs);
    if (newChecklist.isNew()) {
      this.model.get('checklists').create(newChecklist);
    } else {
      newChecklist.save({});
    }
  },

  openChecklistItemForm: function(){
    var form = new HF.Views.ChecklistItemForm

  }

})