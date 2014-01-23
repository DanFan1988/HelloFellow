HF.Views.BoardShow = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(this.model.get('lists'), "add destroy", this.render)
    this.listenTo(this.model, "add change", this.render);

    this.listenTo(this.model.get('lists'), "add",
    HF.Activity.Add)
    this.listenTo(this.model, "change:title", HF.Activity.Edit.bind(this.model));
    this.childViews = [];
  },

  events: {
    "submit #new-title-form": "renameTitle",
    "click #add-list": "addList",
    "click #add-comment": "addComment"
  },


  template: JST['board/show'],

  render: function () {
    var renderedContent = this.template({
      board: this.model,
    });
    this.$el.html(renderedContent);
    this._renderLists()
    this._renderSidebar()

    return this;
  },

  _renderLists: function () {
    this.clearChildViews();

    var that = this;
    this.model.get('lists').each(function(list){
      var listView = new HF.Views.ListShow({
        model: list
      });
      that.$el.find('#insert-list').append(listView.render().$el);
      that.childViews.push(listView);
    })
  },

  _renderSidebar: function () {
    var sidebar = new HF.Views.Sidebar
    this.$el.find('#insert-sidebar').html(sidebar.render().$el)
  },

  addList: function(){
    event.preventDefault();
    var attrs = this.$('#add-list-form').serializeJSON();
    this.model.get('lists').create(attrs, {parse: true, wait:true});

  },

  renameTitle: function(event){
    event.preventDefault();
    var that = this;
    var attrs = this.$('#new-title-form').serializeJSON();
    this.model.set(attrs)
    this.model.save({},{ parse: true})
  },

  addComment: function(event){

  },

  clearChildViews: function () {
    this.childViews.forEach(function (view) { view.remove() });
  }


  //
  //
  // deleteCard: function(event){
  //   event.preventDefault();
  // },
  //
  // createList: function(event){
  //   var newList = new HF.Model.List({
  //     board_id: this.model.id
  //   });
  //   // newList.collection = HF.Data.lists
  //   // newList.fetch({
  //   //   success: //do i needs this? Can i just use listenTo?
  //   // })
  // },
  //
  // renderSidebar: function(){
  //
  // }

})