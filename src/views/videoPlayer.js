var VideoPlayerView = Backbone.View.extend({
  
  // initialize the video player with an html template path
  template: templateURL('src/templates/videoPlayer.html'),

  // initialize the video player
  initialize: function() {
    // give it a starter model as the 0th vid in the collection
    this.model = this.collection.at(0);
    // wire it to listen to the collection for a select, and then reassign the model to the selected one, and render itself
    this.collection.on('select', function(selectedModel) {
      this.model = selectedModel;
      this.render();
    }, this);
  },
  
  // build a render function
  render: function() {
    // assign the video player views element to the template with its video attributes
    this.$el.html(this.template(this.model.attributes));
    // return it
    return this;
  },
});
