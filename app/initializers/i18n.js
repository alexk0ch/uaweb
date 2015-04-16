import Ember from 'ember';

export function initialize(container, application) {
  var set = Ember.set;
  var savedLocale = localStorage.getItem('locale') || 'ua'
  set(application, 'locale', savedLocale);
  
  var localeMap = { ua: 'uk', rus: 'ru', en: 'en' };
  moment.locale(localeMap[savedLocale]);
}

export default {
  name: 'i18n',
  initialize: initialize
};
