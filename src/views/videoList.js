var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
    
  },
  entryArray: [],
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for (var i = 0; i < this.collection.length; i++) {
      this.entryArray[i] = new VideoListEntryView({model: this.collection.models[i]});
      this.entryArray[i].render();
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
