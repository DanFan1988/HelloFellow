HF.Collections.Comments = Backbone.Collection.extend({
  url: "/api/comments",
  model: HF.Models.Board
})