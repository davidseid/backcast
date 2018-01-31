var Videos = Backbone.Collection.extend({
  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  initialize: function() {

  },
  parse: function (response) {
    return response.items;
  },
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5
      }
    });

  },
});