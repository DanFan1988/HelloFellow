HF.Models.Comment = Backbone.Model.extend({
  initialize: function () {
    if(!this.get('user')) {
      this.set({ user: HF.currentUser() });
    }
  },

  name: "Comment"
})