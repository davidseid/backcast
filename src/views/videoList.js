var VideoListView = Backbone.View.extend({

  // initialize the view with a template path
  template: templateURL('src/templates/videoList.html'),

  // initialize the video list view 
  initialize: function() {
    // wire it to listen to 'sync' events and then call its render with the video (this) passed in
    this.collection.on('sync', this.render, this);
  },

  // build render function
  render: function() {
    // detach the listeners from the children of the view element
    this.$el.children().detach();

    // loop through the collection
    for (var i = 0; i < this.collection.length; i++) {
      // pass each video in the coll. to create a vlev, render each, grab the el, and append to this el
      this.$el.append(new VideoListEntryView({model: this.collection.at(i)}).render().el);
    }
  }
});
