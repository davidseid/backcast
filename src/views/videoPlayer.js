var VideoPlayerView = Backbone.View.extend({
  //model = single video model
  //el = .player class
  el: !('.player'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //this.$el.html('<div class="loading">Please wait...</div>');
    
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
