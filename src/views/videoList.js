var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.$el.children().detach();
    for (var i = 0; i < this.collection.length; i++) {
      this.$el.append(new VideoListEntryView({model: this.collection.at(i)}).render());
    }
  },

  template: templateURL('src/templates/videoList.html')
});
