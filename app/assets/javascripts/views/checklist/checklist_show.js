HF.Views.ChecklistShow = Backbone.View.extend({
  //has a checklist model
  initialize: function(options){
    this.listenTo(this.model.get('checklist_items'), "add change:checked", this.render)
  },

  events:{
    "submit #new-title-form": "renameTitle",
    "click #open-checklist-item-form": "openChecklistItemForm",
    'click .checklist-item': "check"

  },

  template: JST['checklist/show'],

  render: function(){
    var checked = 0
    this.model.get('checklist_items').each(function(checklist_item){
      if (checklist_item.get('checked') == "yes") {
        checked++
      }
    })
    var progress = (checked / this.model.get('checklist_items').length)*100
    var renderedContent = this.template({
      checklist: this.model,
      checklist_items: this.model.get('checklist_items'),
      progress: progress
    })
    this.$el.html(renderedContent);
    return this;
  },

  renameTitle: function(event){
    event.preventDefault();
    var attrs = this.$('#new-title-form').serializeJSON();
    this.model.set(attrs)
    this.model.save({})
  },

  openChecklistItemForm: function(event){
    console.log("ARE WE THERE YET?")
    event.preventDefault()
    var form = new HF.Views.ChecklistItemForm({
      checklist: this.model,
      collection: this.model.get('checklist_items')
    })
    this.$el.find('#insert-checklist-items').html(form.render().$el)
  },

  check: function(event) {
    console.log("we firing?")
    $(event.target).attr('checked', 'checked')
    var id = $(event.target).data('id')
    var checklist_item = this.model.get('checklist_items').get(id)
    if (checklist_item.get('checked') == 'no') {
      checklist_item.set({ checked: "yes"})
      checklist_item.save({})
    } else {
      checklist_item.set({ checked: "no"})
      checklist_item.save({})
    }
  }
})
