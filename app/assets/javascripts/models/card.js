HF.Models.Card = Backbone.Model.extend({
  url: "/api/cards",
  parse: function (data) {
    var comments = data.comments;
    data.comments = new HF.Collections.Comments(comments, { card_id: data.id, parse: true })
    return data;
  },

  toJSON: function () {

    var data = _.clone(this.attributes);
    if(data.title) {
      data.title_attributes = data.title
    }
    delete data['title'];
    return data;
  },

})