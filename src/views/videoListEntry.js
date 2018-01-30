var VideoListEntryView = Backbone.View.extend({
  // takes in model in form of new Video
  initialize: function () {
    this.$el.on('click', '.video-list-entry-title', this.model.select.bind(this.model));    
    //this.on('select', this.render);
  },

  render: function() {
    // console.log(this.model.attributes);
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));
    // console.log(this.el);
    //document.body.append(this.el);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
