import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('master', { path: '/:locale'}, function () {
    this.route('favourite');
    this.route('login');
    this.route('admin');
  });
});
