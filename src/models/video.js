var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    //this.set('select', false);
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('img', video.snippet.thumbnails.default.url);
    //console.log(this.get + ' VIDEO');
  },

  select: function() {
    //console.log(this.model.get('title'));
    this.trigger('select', this);
    //console.log('this');
  }

});
