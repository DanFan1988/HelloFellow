HF.Views.HeaderAdd = Backbone.View.extend({

  initialize: function(options){
    this.$el = options.$el
    this.listenTo(HF.Data.boards, "add", HF.Activity.Add)
  },

  events:{
    "click #new-board": "newBoardForm",
    "click #new-org": "newOrgForm",
    "click #add-board": "addBoard",
    "submit #add-org-form": "addOrg"
  },

  template: JST['dropdown/add_board'],
  template2: JST['dropdown/add_org'],

  newBoardForm: function(event){
    event.stopPropagation();
    event.preventDefault();
    var content = this.template()
    this.$el.find('#new-board-or-org').html(content)
  },

  newOrgForm: function(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("making new org form")
    var content = this.template2()
    this.$el.find('#new-board-or-org').html(content)
  },

  addBoard: function(event){
    event.preventDefault();
    var newBoard = new HF.Models.Board
    var attrs = this.$("#add-board-form").serializeJSON();

    newBoard.set(attrs);
    if (newBoard.isNew()) {
      HF.Data.boards.create(newBoard)
    } else {
      newBoard.save({});
    }
  },

  addOrg: function(event){
    console.log("HERERES?")
    event.preventDefault();
    var newOrg = new HF.Models.Org
    var attrs = this.$("#add-org-form").serializeJSON();

    newOrg.set(attrs);
    if (newOrg.isNew()) {
      HF.Data.organizations.create(newOrg);
    } else {
      newOrg.save({});
    }
  }
});
