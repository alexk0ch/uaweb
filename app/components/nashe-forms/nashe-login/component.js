import Ember from 'ember';

export default Ember.Component.extend({
  usernameFormatted: function () {
    var name = this.get('username');
    return name ? name : '...';
  }.property('username'),

  actions: {
    login: function (username, password) {
      this.sendAction('onLogin', username, password);
    }
  }
});
