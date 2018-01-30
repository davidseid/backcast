var VideoListEntryView = Backbone.View.extend({
  // takes in model in form of new Video
  // initialize: function () {
  //   console.log(this.prototype.render);
  // },

  render: function() {
    //console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this.el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
