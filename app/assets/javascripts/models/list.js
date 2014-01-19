HF.Models.List = Backbone.Model.extend({
  parse: function (data) {
    var cards = data.cards;
    data.cards = new HF.Collections.Cards(cards, { list_id: data.id, parse: true })
    return data;
  }
})