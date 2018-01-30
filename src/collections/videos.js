var Videos = Backbone.Collection.extend({
  model: Video,
  
  initialize: function() {

  },
  
  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: $.extend({
        key: YOUTUBE_API_KEY,
        q: 'Dog + Video',
        part: 'snippet'
      }, {maxResults: 5}),
      dataType: 'json',
      success: function() {
        console.log('success!!');
      },
      error: function() {
        console.log('failed search');
      }
    });
  },
});



// ache: false,
//    data: $.extend({
//      key: 'API_KEY',
//      q: $('#hyv-search').val(),
//      part: 'snippet'
//    }, {maxResults:20,pageToken:$("#pageToken").val()}),
//    dataType: 'json',
//    type: 'GET',
//    timeout: 5000,
//    url: 'https://www.googleapis.com/youtube/v3/search'