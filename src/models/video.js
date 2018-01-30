var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // this.set('title', video.snippet.title);
    // console.log(this.get('title'));
  },

  select: function() {
    this.trigger('select', this);
  }

});
