import Ember from 'ember';

export function formatDate(date) {
  return moment(+date).format('D MMMM');
}

export default Ember.HTMLBars.makeBoundHelper(formatDate);
