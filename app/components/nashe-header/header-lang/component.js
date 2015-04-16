import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement () {
    var savedLocale = localStorage.getItem('locale');
    var $elem = Ember.$(this.element).find('select');

    if (savedLocale) {
      $elem.val(localStorage.getItem('locale'));
    }
    
    $elem.styler(); 
  }
});
