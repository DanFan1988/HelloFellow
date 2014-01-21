HF.Models.Card = Backbone.Model.extend({

  parse: function (data) {
    var comments = data.comments;
    data.comments = new HF.Collections.Comments(comments, { card_id: data.id, parse: true });

    var labels = data.labels;
    data.labels = new HF.Collections.Labels(labels, { card_id: data.id, parse: true });

    var checklists = data.checklists;
    data.checklists = new HF.Collections.Checklists(checklists, { card_id: data.id, parse: true });

    return data;
  },
  //
  // toJSON: function () {
  //   debugger;
  //
  //   var data = _.clone(this.attributes);
  //   if(data.comments) {
  //     data.comments_attributes = data.comments
  //   }
  //   delete data['comments'];
  //   return data;
  // },

})