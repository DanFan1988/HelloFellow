HF.Views.CardModalShow = Backbone.View.extend({

  initialize: function(options){
    this.list_id = options.list_id
    //this.listenTo(this.model.get('comments'), "all", this._renderComments)
    // this.listenTo(this.model.get('comments'), "sync", this.render)
    this.parent = options.parent;
    this.listenTo(this.model.get('checklists'), "change:title sync", this._swapChecklists)
  },

  events:{
    "click #create-comment": "createComment",
    "click #delete-card": "deleteCard",
    "hidden.bs.modal": "magic"
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

  magic: function(){
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

  // _renderNewComments: function(){
  //   console.log('here')
  //   var newComment = new HF.Views.CommentShow({
  //     model: this.model.get('comments').last()
  //   })
  //   this.$el.find('#insert-new-comment').append(newComment.render().$el)
  // },

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
      model: this.model
    })
    this.$el.find('#render-button-list').html(buttonGroup.render().$el)
  },

  createComment: function(event){

    event.preventDefault();

    var attrs = this.$("#add-comment-form").serializeJSON();
    var newComment = new HF.Models.Comment;
    // newComment.set(attrs);
    if (newComment.isNew()) {
      this.model.get('comments').create(attrs, {
        success: function (){

        },
        error: function () {

        }
      });
    } else {
      newComment.save(attrs);
    }
    // $('#CardModal' + this.model.id).modal('hide');
    // $('body').removeClass('modal-open');
    // $('.modal-backdrop').remove();
    // $('#CardModal' + this.model.id).modal('show');
  },

  deleteCard: function(event){
    event.preventDefault();
    this.model.destroy();

    $('#CardModal' + this.model.id).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  },

  _swapChecklists: function(callback){
    this.$el.find("#insert-checklist").empty()
    this._renderChecklists()
  },

    // $('#CardModal' + this.model.id).modal('hide');
    // $('body').removeClass('modal-open');
    // $('.modal-backdrop').remove();
})
