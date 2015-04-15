import Ember from 'ember';

export default Ember.Service.extend({
  username: null, 
  password: null,

  isLoggedIn: function () {
    return !!this.get('username') && this.get('password')
  }.property('username', 'password')

});