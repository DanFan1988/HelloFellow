HF.Models.Card = Backbone.Model.extend({
  rootURL: "/api/cards",
  parse: function (data) {
    var comments = data.comments;
    data.comments = new HF.Collections.Comments(comments, { card_id: data.id, parse: true })
    return data;
  }

})