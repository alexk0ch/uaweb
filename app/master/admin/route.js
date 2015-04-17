import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel (transition) {
    console.log('!')
    if (!this.session.get('isLoggedIn')) {
      this.session.set('attemptedTransition', transition);
      this.transitionTo('master.login');
    }
  }
});
