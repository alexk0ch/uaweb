import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () {
    if (window.location.pathname === "/")
      this.replaceWith("/ua")
  }
});
