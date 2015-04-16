import Ember from 'ember';

export default Ember.Route.extend({
  
  beforeModel (params) {
    var savedLocale = localStorage.getItem('locale') || 'ua';
    var tail = params.intent.url.split('/').slice(2).join('/');
    this.session.set('locale', savedLocale);
    if (savedLocale && params.locale !== savedLocale) {
      this.replaceWith('/' + savedLocale + '/' + tail);
    }
  },

  model () {
    return {
      locale: localStorage.getItem('locale') || 'ua',
      year : function () {
        return new Date().getFullYear();
      }.property(),
      cities: ['cities.KIEV', 'cities.LVIV']
    };
  },

  actions : {
    logout: function () {
      this.session.set('username', null);
      this.session.set('password', null);
      this.transitionTo('master.index');
    }
  }

});
