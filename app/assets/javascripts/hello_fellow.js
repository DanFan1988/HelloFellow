window.HF = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Data: {},
  currentUser: function () {
    return HF.Data.users.get(HF.currentUserId);
  },
  Activity: {},
  initialize: function() {
    HF.Data.users = new HF.Collections.Users
    HF.Data.users.fetch();
    //
    // HF.Data.organizations = new HF.Collections.Organizations
    // HF.Data.organizations.fetch();

    HF.Data.activities = new HF.Collections.Activities
    HF.Data.activities.fetch({
      success: function(){
        HF.Data.boards = new HF.Collections.Boards
        HF.Data.boards.fetch({
          success: function(){
            new HF.Routers.Router({ $rootEl: $('#container')});
            Backbone.history.start();
          }
        });
      }
    })


  }
};

HF.Activity.Add = function(model){
  console.log("here")
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "added " + model.name + ": <strong>" + model.get('title') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.Edit = function(){
  console.log("here")
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "changed " + this.name + ": <strong>" + this.previousAttributes().title +
    "</strong> to <strong>" + this.get('title') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.Delete = function(){
  console.log("here")
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "deleted " + this.name + ": <strong>" + this.get('title') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.EditDescription = function(){
  console.log("here")
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "changed description of " + this.name + ": <strong>" + this.get('title') +
    "</strong> from <strong>" + this.previousAttributes().description +
    "</strong> to <strong>" + this.get('description') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.AddToCard = function(model){
  console.log("here")
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "added " + model.name + ": <strong>" + model.get('title') + "</strong> to Card: <strong>"
    + arguments[0].get('title') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.AddCommentToCard = function(model){
  console.log("here")
  debugger;
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "added " + model.name + ": <strong>" + model.get('body') + "</strong> to Card: <strong>"
    + arguments[0].get('body') + "</strong>"
  })
  HF.Data.activities.create(activity)
}