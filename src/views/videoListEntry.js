var VideoListEntryView = Backbone.View.extend({
  
  // initialize hte vlev with a template html path
  template: templateURL('src/templates/videoListEntry.html'),

  // initializes the video list entry views with an event listener 
  initialize: function () {
    // upon instantiation, the view is wired to listen for a click on the .videolistentry title, and call select on the associated video
    this.$el.on('click', '.video-list-entry-title', this.model.select.bind(this.model));    
  },

  // video list entry views have a render function
  render: function() {
    // clear the entry view's element
    this.$el.empty();
    // reassign the view's html to pass the video attributes to the template 
    this.$el.html(this.template(this.model.attributes));
    // return the view
    return this;
  }
});
