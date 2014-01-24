HF.Views.BoardShow = Backbone.View.extend({
  initialize: function(options){
    var that = this
    this.listenTo(this.model.get('lists'), "add destroy", this.render)
    this.listenTo(this.model, "add change", this.render);
    //
    // this.model.get('lists').each(function(list){
    //   that.listenTo(list.get('cards'), "add", that.render)
    // });


    this.listenTo(this.model.get('lists'), "add",
    HF.Activity.Add)
    this.listenTo(this.model, "change:title", HF.Activity.Edit.bind(this.model));
    this.childViews = [];
  },

  events: {
    "submit #new-title-form": "renameTitle",
    "click #add-list": "addList",
    "click #add-comment": "addComment",
    "sortstop": "reorderCard"
  },


  template: JST['board/show'],

  render: function () {
    this.clearChildViews()
    var renderedContent = this.template({
      board: this.model,
    });
    this.$el.html(renderedContent);
    this._renderLists()
    this._renderSidebar()
    this.$el.find(".sortable-list").sortable({
          items: ".list-background"
    })
    return this;
  },

  reorderCard: function(event, ui){
    debugger;
    var $item = $(ui.item);
    var movedListID = $item.data('list-id');
    var aboveListID = $item.parent().prev().find('.list-background').data('list-id');
    var belowListID = $item.next().data('list-id');

    var lists = this.model.get('lists');
    var movedList = lists.get(movedListID);
    var aboveList = lists.get(aboveListID);
    var belowList = lists.get(belowListID);
    console.log(movedList.get('order'), belowList, aboveList)

    var newOrderVal;
    if (aboveList && belowList) {
      newOrderVal = (aboveList.get('order') + belowList.get('order')) / 2.0;
    } else if (aboveList) {
      newOrderVal = aboveList.get('order') + 1.0;
    } else if (belowList) {
      newOrderVal = belowList.get('order') / 2.0;
    } else {
      newOrderVal = 1.0;
    }

    movedList.set('order', newOrderVal);
    movedList.save();
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