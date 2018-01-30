var VideoPlayerView = Backbone.View.extend({
  //model = single video model
  //el = .player class
  //el: $('.player'),
  //model: this.collection.models[0],

  initialize: function() {
    this.model = this.collection.models[0];
    this.collection.on('select', function(selectedModel) {
      console.log('heard in vpv');
      this.model = selectedModel;
      this.render();
      //this.render(something);
    }, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //this.$el.html('<div class="loading">Please wait...</div>');
    
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
