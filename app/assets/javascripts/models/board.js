HF.Models.Board = Backbone.Model.extend({
  rootURL: "/api/boards",
  parse: function (data) {
    var lists = data.lists;
    data.lists = new HF.Collections.Lists(lists, { board_id: data.id, parse: true })
    return data;
  }
})