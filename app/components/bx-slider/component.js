import Ember from 'ember';

export default Ember.Component.extend({
  slider : null, 

  didInsertElement () {
    var slider = Ember.$(this.element).find('.bxslider').bxSlider({
      mode: 'horizontal',
      captions: true,
      // auto: true,
      // autoHover: true,
      // autoStart: true,
      pager: true,
      infiniteLoop: true,
      prevText: '',
      nextText: ''
    });

    this.set('slider', slider);
  },

  willDestroyElement () {
    this.get('slider').destroySlider();
  }
});
