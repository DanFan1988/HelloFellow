HF.Models.Board = Backbone.Model.extend({
  parse: function (data) {
    var lists = data.lists;
    data.lists = new HF.Collections.Lists(lists, { board_id: data.id, parse: true })
    return data;
  },

  // toJSON: function () {
  //   var data = _.clone(this.attributes);
  //   console.log(data);
  //   return data;
  // }
});