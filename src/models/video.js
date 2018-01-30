var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', "https://www.youtube.com/embed/" + video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('img', video.snippet.thumbnails.default.url);
  },

  select: function() {
    this.trigger('select', this);
  }

});
