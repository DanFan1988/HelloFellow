HF.Views.BoardShow = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model.get('lists'), "add destroy", this.render)
    this.listenTo(this.model, "add change", this.render);
    this.on("modal:opened", this.disableSortable)
    this.on("modal:closed", this.enableSortable)
    this.listenTo(this.model.get('lists'), "add",
    HF.Activity.Add)
    this.listenTo(this.model, "change:title", HF.Activity.Edit.bind(this.model));
    this.childViews = [];

    this.$modal_container = options.$modal_container
  },

  events: {
    "submit #new-title-form": "renameTitle",
    "click #add-list": "addList",
    "click #add-comment": "addComment",
    "sortstop": "reorderList"
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
          items: ".list-background",
          distance: 15,
          cursor: "move",
          opacity: 0.5,
          tolerance: "pointer"
    })
    return this;
  },

  reorderList: function(event, ui){
    var $item = $(ui.item);

    var movedListID = $item.data('list-id');
    var aboveListID = $item.prev().data('list-id');
    var belowListID = $item.next().data('list-id');

    var lists = this.model.get('lists');
    var movedList = lists.get(movedListID);
    var aboveList = lists.get(aboveListID);
    var belowList = lists.get(belowListID);

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
    movedList.save({},{parse: true, wait: true});
  },

  _renderLists: function () {
    this.clearChildViews();

    var that = this;

    this.model.get('lists').each(function(list){
      var listView = new HF.Views.ListShow({
        model: list,
        parent: that,
        board: this.model,
        $modal_container: that.$modal_container
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
    var attrs = this.$('#new-title-form').serializeJSON();
    this.model.set(attrs)
    this.model.save({},{ parse: true})
  },

  disableSortable: function(){
    $('.sortable-list').sortable('disable')

  },
  enableSortable: function(){
    $('.sortable-list').sortable('enable')
  },

  clearChildViews: function () {
    this.childViews.forEach(function (view) { view.remove() });
  }
})