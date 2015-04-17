import Ember from 'ember';
import routename from 'uaweb-app/utils/routename';

export default Ember.Route.extend({
  model () {
    var indexModel = this.modelFor('master.index');
    if (indexModel) return indexModel;
    return Ember.$.get('/api/' + this.session.get('locale') + '/' + routename(this.get('routeName')) );
  }
});
