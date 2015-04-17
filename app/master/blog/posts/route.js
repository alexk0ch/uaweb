import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.$.get('/api/' + this.session.get('locale') + '/blog/posts/' + params.id); 
  }
});
