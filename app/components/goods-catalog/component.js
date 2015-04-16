import Ember from 'ember';

export default Ember.Component.extend({
  willInsertElement () {
    $(this.element).find('.bl-catalog__list')
  },

  expanded: false,

  actions: {
    expand: function () {
      this.set('expanded', !this.expanded);
    }
  }
});
