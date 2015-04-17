import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    var indexModel = this.modelFor('master.index');
    if (indexModel) return indexModel;
    return Ember.$.get('/api/' + this.session.get('locale') + '/index');
  }
});
