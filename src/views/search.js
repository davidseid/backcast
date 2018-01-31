var SearchView = Backbone.View.extend({

  // assign the search view to a template path
  template: templateURL('src/templates/search.html'),

  // setup DOM event listeners for a click button and a keyup input
  events: {
    'click button': 'enterSearchButton',
    'keyup input': 'pressedEnterSearch'
  },

  // setup a lastCall property to 0
  lastCall: 0,

  // define an enterSearch function
  enterSearch: function () {
    // if more than 2 seconds have passed since the last enterSearch
    if (this.lastCall + 2000 < Date.now()) {
      // reassing the last call to now
      this.lastCall = Date.now();
      // capture the query from teh input
      var query = $('input').val();
      // call search on the collection with the query
      this.collection.search(query);
    }
  },

  // define an enterSearchButton
  enterSearchButton: function () {
    // call enter search
    this.enterSearch();
    // clear the input search 
    $('input').val('');
  },

  // define pressedEnterSearch with an e
  pressedEnterSearch: function (e) {
    // call enterSearch
    this.enterSearch();
    // if the e keycode is 13 reset the input??? 
    if (e.keyCode === 13) {
      $('input').val('');
    }
  },

  // define render
  render: function() {
    // assin the search view html to the template path
    this.$el.html(this.template());
    return this;
  },


});
