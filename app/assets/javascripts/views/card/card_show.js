HF.Views.CardShow = Backbone.View.extend({

  initialize: function(options){
    this.list_id = options.list_id
    // this.listenTo(this.model.get('comments'), "sync", this.render)
    this.listenTo(this.model.get('checklists'), "sync", this.render)
  },

  events:{
    "click #open-description-form": "openDescriptionForm",
    "click #open-card-title-edit-form": "editCardTitleForm",
    "click #create-comment": "createComment",
    "click #delete-card": "deleteCard"
  },

  template: JST['card/show'],

  render: function(){
    var renderedContent = this.template({
      card: this.model,
      list_id: this.list_id
      })
    this.$el.html(renderedContent);
    this._renderComments()
    this._renderButtonGroup()
    this._renderChecklists()
    return this;
  },

  _renderComments: function(){
    var that = this;
    this.model.get('comments') && this.model.get('comments').each(function(comment){
      var commentsView = new HF.Views.CommentShow({
        model: comment,
        card_id: that.model.id,
        collection: that.model.get('comments')
      })

      that.$el.find('#insert-comment').append(commentsView.render().$el);
  	});
  },

  _renderChecklists: function(){
    var that = this;
    this.model.get('checklists') && this.model.get('checklists').each(function(checklist){
      var checklistView = new HF.Views.ChecklistShow({
        model: checklist
      })
      that.$el.find('#insert-checklist').append(checklistView.render().$el);
    })
  },

  _renderButtonGroup: function(){
    var buttonGroup = new HF.Views.CardButtonGroup({
      model: this.model
    })
    this.$el.find('#render-button-list').html(buttonGroup.render().$el)
  },

  openDescriptionForm: function(event){
    event.preventDefault();
    var newDescription = new HF.Views.DescriptionForm({
      model: this.model,
      collection: this.collection
    })
    this.$el.find("#insert-description-form").html(newDescription.render().$el)
  },

  editCardTitleForm: function(event){
    event.preventDefault();
    var editTitle = new HF.Views.EditCardTitle({
      model: this.model,
      collection: this.collection
    })
    this.$el.find("#edit-card-title-form").html(editTitle.render().$el)
  },

  createComment: function(event){
    event.preventDefault();
    var attrs = this.$("#add-comment-form").serializeJSON();
    var newComment = new HF.Models.Comment;
    newComment.set(attrs);
    if (newComment.isNew()) {
      this.model.get('comments').create(newComment);
    } else {
      newComment.save({});
    }
    // $('#CardModal' + this.model.id).modal('hide');
  //   $('body').removeClass('modal-open');
  //   $('.modal-backdrop').remove();
    // $('#CardModal' + this.model.id).modal('show');
  },

  deleteCard: function(event){
    event.preventDefault();
    this.model.destroy();

    $('#CardModal' + this.model.id).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

    // $('#CardModal' + this.model.id).modal('hide');
    // $('body').removeClass('modal-open');
    // $('.modal-backdrop').remove();
})
