var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    //this.videos.search();
    this.video = new Video(exampleVideoData[0]);
    this.videos.on('search' /* function here would set this.videos to a new videos returned by search*/);
    this.videos.search();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
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
