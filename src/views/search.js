var SearchView = Backbone.View.extend({
  
  events: {
    'click button': 'enterSearchButton',
    'keyup input': 'pressedEnterSearch'
  },
  lastCall: 0,
  
  enterSearch: function () {
    if (this.lastCall + 2000 < Date.now()) {
      this.lastCall = Date.now();
      var query = $('input').val().trim();
      this.collection.search(query);
    }
  },
  enterSearchButton: function () {
    this.enterSearch();
    $('input').val('');
  },
  pressedEnterSearch: function (e) {
    this.enterSearch();
    if (e.keyCode === 13) {
      $('input').val('');
    }
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
