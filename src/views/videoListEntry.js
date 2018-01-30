var VideoListEntryView = Backbone.View.extend({
  // takes in model in form of new Video
  initialize: function () {
    var triggerSelect = function () {
      this.model.select();
    };
    $('body').on('click', '.video-list-entry-title', triggerSelect.bind(this));
  },

  render: function() {
    // console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    // console.log(this.el);
    //document.body.append(this.el);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
