import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement () {
    $('.bl-location__city')
    .styler(); 
  }
});
