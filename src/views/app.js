var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.listenTo(this.videos, 'sync', function () { this.videos.at(0).select(); });
    this.videos.search('westballz vs zain');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();
    new VideoListView({
      el: $('.list'), 
      collection: this.videos 
    }).render();
    new VideoPlayerView({
      el: $('.player'),
      collection: this.videos
    }).render();
  },

  template: templateURL('src/templates/app.html')
});
