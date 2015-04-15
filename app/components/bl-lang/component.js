import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement () {
    $('.bl-location__lang')
    .val(localStorage.getItem('locale'))
    .styler(); 
  }
});
