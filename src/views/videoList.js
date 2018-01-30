var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
    //console.log(this.get + 'vlv');
  },
  
  entryArray: [],
  
  render: function() {
    this.$el.children().detach();
    for (var i = 0; i < this.collection.length; i++) {
      this.entryArray[i] = new VideoListEntryView({model: this.collection.models[i]});
      this.$el.append(this.entryArray[i].render());
    }
    //console.log(this.$el);
    //this.$el.html(this.template());
    
    
    //return this;
  },

  template: templateURL('src/templates/videoList.html')

});
