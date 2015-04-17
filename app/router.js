import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('master', { path: '/:locale'}, function () {
    this.route('favourite');
    this.route('login');
    this.resource('master.admin', {path: 'admin'}, function () {
      
    });
    this.resource('master.blog', { path: 'blog' }, function () {
      this.resource('master.blog.posts', { path:'posts/:id' }, function() {});
    });
    this.resource('master.goods', { path: 'goods/:id' }, function () {

    });
    this.resource('master.brands', { path: 'brands/:id' }, function () {

    });
  });
});
