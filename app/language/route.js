import Ember from 'ember';

export default Ember.Route.extend({
  
  beforeModel (params) {
    var savedLocale = localStorage.getItem('locale');

    if (savedLocale) {
      this.replaceWith('/' + savedLocale);
    }
  },

  model (params, transition) {
    return $.get('/api/locales/' + params.locale);
  }

});
