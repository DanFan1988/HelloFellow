HF.Views.BoardShow = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model.get('lists'), "sync destroy", this.render)
    this.listenTo(this.collection, "change", this.render)
  },

  events: {
    "click #rename-title": "renameTitle",
    "click #add-list": "addList"
  },

  template: JST['board/show'],

  render: function(){
      var renderedContent = this.template({
      board: this.model,
      })
    this.$el.html(renderedContent);
    this._renderLists()
    return this;
  },

  _renderLists: function(){
    var that = this;
    this.model.get('lists').each(function(list){
      console.log("making a list")
      var listView = new HF.Views.ListShow({
        model: list
      });
      that.$el.find('#insert-list').append(listView.render().$el);
    })
  },

  addList: function(){
    console.log('MAKING A NEW LIST OK')
    event.preventDefault();
    var attrs = this.$('#add-list-form').serializeJSON();
    var newList = new HF.Models.List

    newList.set(attrs);
    if (newList.isNew()) {
      this.model.get('lists').create(newList);
    } else {
      newList.save({});
    }
  },

  renameTitle: function(event){ //editting
    console.log('renaming title')
    event.preventDefault();
    var attrs = this.$('#new-title-form').serializeJSON();
    this.model.set(attrs)
    debugger;
    this.model.save({})
    console.log(attrs)
  },


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