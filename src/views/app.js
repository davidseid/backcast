var AppView = Backbone.View.extend({
  // the app instance is tied to the element #app and a template function with set path
  el: '#app',
  template: templateURL('src/templates/app.html'),
  
  // the app is initialized with certain properties and function calls
  initialize: function() {
    // the app instance is initially assigned a videos collection by invoking new Videos
    this.videos = new Videos();
    // the app instance listens to the video collection for a 'sync', and then selects the 0th video
    this.listenTo(this.videos, 'sync', function () { this.videos.at(0).select(); });
    // the app initially runs the videos search function with fighting cats query
    this.videos.search('fighting cats');
  },

  // the app has a render function (which is called upon instantiation in the index.html file)
  render: function() {
    // the app fills in its html via the template property
    this.$el.html(this.template());
    // the app insantiates and renders a search view with the same videos coll, and sets the el to the .search
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
    // the app instantiates and renders a videolist view with the same videos coll, and sets the el to the .list
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    // the app instantiates and renders a videoplayer view with the same videos coll, and sets the el to the .player
    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player')
    });
  },
});
