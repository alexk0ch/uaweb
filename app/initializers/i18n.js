export function initialize(container, application) {
  var set = Ember.set;
  set(application, 'locale', localStorage.getItem('locale') || 'ua');
}

export default {
  name: 'i18n',
  initialize: initialize
};
