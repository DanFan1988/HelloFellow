// HF.Views.DescriptionForm = Backbone.View.extend({
//   initialize: function(){
//     this.listenTo(this.model, "change:description", this.render)
//
//   },
//
//   events:{
//   },
//
//   template: JST['card/description'],
//
//   render: function(){
//     var renderedContent = this.template({
//       card: this.model
//       })
//     this.$el.html(renderedContent);
//     return this;
//   },
//
// })