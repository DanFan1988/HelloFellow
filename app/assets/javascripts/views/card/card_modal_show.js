HF.Views.CardModalShow = Backbone.View.extend({

  initialize: function(options){
    this.list_id = options.list_id
    this.parent = options.parent;

    this.listenTo(this.model.get('checklists'), "change:title sync", this._swapChecklists)

    this.listenTo(this.model, "change:title", HF.Activity.Edit.bind(this.model))
    this.listenTo(this.model, "change:description", HF.Activity.EditDescription.bind(this.model))
    this.listenTo(this.model.get('checklists'), "add", HF.Activity.Add)
    this.listenTo(this.model.get('comments'), "add", HF.Activity.AddCommentToCard)
  },

  events:{
    "click #create-comment": "createComment",
    "click #delete-card": "deleteCard",
    "hidden.bs.modal": "modalCloseTrigger"
  },

  template: JST['card/show_modal'],

  render: function(){
    var renderedContent = this.template({
      card: this.model,
      list_id: this.list_id
      })
    this.$el.html(renderedContent);
    this._renderTitle()
    this._renderDescription()
    this._renderComments()
    this._renderButtonGroup()
    this._renderChecklists()
    return this;
  },

  modalCloseTrigger: function(){
    this.parent.trigger('modal:closed')
  },

  _renderTitle: function(){
    var title = new HF.Views.CardTitle({
      model :this.model,
      collection: this.collection
    })
    this.$el.find('#insert-title').html(title.render().$el)
  },

  _renderDescription: function(){
    var description = new HF.Views.CardDescription({
      model: this.model,
      collection: this.collection
    })
    this.$el.find("#insert-description").html(description.render().$el)
  },

  _renderComments: function(){
    var that = this;
    var commentsView = new HF.Views.CommentShow({
      collection: that.model.get('comments')
    })
    that.$el.find('#insert-comments').html(commentsView.render().$el);
  },

  _renderChecklists: function(){
    var that = this;
    this.model.get('checklists') && this.model.get('checklists').each(function(checklist){
      var checklistView = new HF.Views.ChecklistShow({
        model: checklist,
        collection: that.model.get('checklists')
      });
      that.$el.find('#insert-checklist').append(checklistView.render().$el);
    });
  },

  _renderButtonGroup: function(){
    var buttonGroup = new HF.Views.CardButtonGroup({
      model: this.model,
      parent: this.parent
    })
    this.$el.find('#render-button-list').html(buttonGroup.render().$el)
  },

  createComment: function(event){

    event.preventDefault();

    var attrs = this.$("#add-comment-form").serializeJSON();
    var newComment = new HF.Models.Comment;
    if (newComment.isNew()) {
      this.model.get('comments').create(attrs);
    } else {
      newComment.save(attrs);
    }
  },

  deleteCard: function(event){
    event.preventDefault();
    this.model.destroy();

    $('#CardModal' + this.model.id).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.parent.trigger('modal:closed')
  },

  _swapChecklists: function(callback){
    this.$el.find("#insert-checklist").empty()
    this._renderChecklists()
  }
})
