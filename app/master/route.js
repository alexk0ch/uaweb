import Ember from 'ember';

export default Ember.Route.extend({
  
  beforeModel (params) {
    var savedLocale = localStorage.getItem('locale');
    var tail = params.intent.url.split('/').slice(2).join('/');
    if (savedLocale && params.locale !== savedLocale) {
      this.replaceWith('/' + savedLocale + '/' + tail);
    }
  },

  model (params, transition) {
    return $.get('/api/locales/' + params.locale)
    .success((data)=>{
      data.labels.year = function () {
        return new Date().getFullYear();
      }.property();
      return data
    })
    .error(()=>{
      this.replaceWith('/ua');
    });
  },

  actions : {
    logout: function () {
      this.session.set('username', null);
      this.session.set('password', null);
      this.transitionTo('master.index');
    }
  }

});
