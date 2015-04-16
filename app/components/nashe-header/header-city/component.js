import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement () {
    Ember.$('.bl-location__city').styler(); 
  }
});
