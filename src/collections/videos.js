var Videos = Backbone.Collection.extend({
  model: Video,
  
  initialize: function() {

  },
  
  search: function(query) {
    //var holderObject;
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: $.extend({
        key: YOUTUBE_API_KEY,
        q: 'Dog + Video',
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      }, {maxResults: 5}),
      dataType: 'json',
      success: function(data) {
        console.log(' success!!');
        console.log(data.items);
        new Videos(data.items);
      },
      error: function() {
        console.log('failed search');
      }
    });
    //console.log(holderObject);
    console.log('outside of success function');
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