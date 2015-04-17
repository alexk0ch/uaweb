import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement () {
    var savedLocale = localStorage.getItem('locale');
    var $elem = Ember.$(this.element).find('select');

    if (savedLocale) {
      $elem.val(localStorage.getItem('locale'));
    }
    
    $elem.styler(); 
  },

  actions : {
    localeSwitch : function () {
      var locale = $(this.element).find('select').val();
      var prevLocale = this.session.get('locale');
      localStorage.setItem('locale', locale);
      window.location.href = window.location.href.replace(prevLocale, locale);
    }
  }
});