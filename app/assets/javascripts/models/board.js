HF.Models.Board = Backbone.Model.extend({
  parse: function (data) {
    var lists = data.lists;
    this._getLists().add(lists, { board_id: data.id, parse: true });
    delete data.lists;
    return data;
  },

  _getLists: function () {
    if(!this.get('lists')) {
      this.set({ lists: new HF.Collections.Lists() });
    }
    return this.get('lists');
  },
  // toJSON: function () {
  //   var data = _.clone(this.attributes);
  //   console.log(data);
  //   return data;
  // }
  name: "Board"
});