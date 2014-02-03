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
    
    // not yet implimeneted. Figure out a way to jbuild in to reduce fetches
    // when you decide to impliment

    // HF.Data.organizations = new HF.Collections.Organizations
    // HF.Data.organizations.fetch();

    HF.Data.activities = new HF.Collections.Activities
    HF.Data.activities.fetch({
      success: function(){
        HF.Data.boards = new HF.Collections.Boards
        HF.Data.boards.fetch({
          success: function(){
            $('#header').html(new HF.Views.HeaderShow({
              collection: HF.Data.boards
            }).render().$el)
            new HF.Routers.Router({ $rootEl: $('#container')});
            Backbone.history.start();
          }
        });
      }
    });
  }
};

HF.Activity.Add = function(model){
  HF.Data.activities.create({
    user_id: HF.currentUserId,
    action: "added " + model.name + ": <strong>" + model.get('title') + "</strong>"
  });
}

HF.Activity.Edit = function(){
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "changed " + this.name + ": <strong>" + this.previousAttributes().title +
    "</strong> to <strong>" + this.get('title') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.Delete = function(model){
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "deleted " + model.name + ": <strong>" + model.get('title') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.Move = function(model){
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "moved " + model.name + ": <strong>" + model.get('title') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

HF.Activity.EditDescription = function(){
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

HF.Activity.AddCommentToCard = function(model, collection){
  console.log("here")
  var activity = new HF.Models.Activity({
    user_id: HF.currentUserId,
    action: "added "+ model.name + ": <strong>" + model.get('body') + "</strong>"
  })
  HF.Data.activities.create(activity)
}

// HF.Views.NestingView = Backbone.View.extend({
//   addChildView: function (view) {
//     this.childViews = this.childViews || [];
//     this.childViews.push(view);
//   },
//
//   removeChildViews: function () {
//     this.childViews.forEach(function (view) { view.remove() });
//   }
// })