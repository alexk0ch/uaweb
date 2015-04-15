import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel (transition) {
    if (!this.session.get('isLoggedIn')) {
      this.session.set('attemptedTransition', transition);
      this.transitionTo('master.login');
    }
  }
});
