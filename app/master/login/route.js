import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    login (username, password) {
      this.session.set('username', username);
      this.session.set('password', password);
      
      const transition = this.session.get('attemptedTransition');
      if (transition) {
        this.session.set('attemptedTransition', null);
        transition.retry();
      } else {
        this.transitionTo('master.admin');
      }
    }

  }
});
