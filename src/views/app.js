var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.video = new Video(exampleVideoData[0]);
    this.videos.on('select', function (){console.log('changed');});
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
      model: this.video
    }).render();
  },

  template: templateURL('src/templates/app.html')

});
