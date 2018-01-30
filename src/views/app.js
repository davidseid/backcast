var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.videos.search();
    this.video = new Video(exampleVideoData[0]);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'), 
      collection: this.videos 
    }).render();
    new VideoPlayerView({
      el: $('.player'),
      collection: this.videos
    }).render();
  },

  template: templateURL('src/templates/app.html')
});
