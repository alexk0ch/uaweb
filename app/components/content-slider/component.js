import Ember from 'ember';

export default Ember.Component.extend({
  slider : null, 

  didInsertElement () {
    
    var config = {
      mode: 'horizontal',
      infiniteLoop: true,
      prevText: '',
      nextText: '',
      pager: false
    };

    var mode = this.get('mode'),
        pager = this.get('pager'),
        customControls = this.get('customControls'),
        $sliderRanger = Ember.$(this.element).find('.bl_popular__changer');

    if (mode) {
      config.mode = mode;
    }

    if (pager) {
      config.pager = true;
    }

    if (customControls) {
      config.nextSelector = '#' + this.element.id + ' .bl_popular__slide-arrow.right';
      config.prevSelector = '#' + this.element.id + ' .bl_popular__slide-arrow.left';
    }

    if ($sliderRanger.length) {
      config.onSlideAfter = function () {
        var currentSlide = slider.getCurrentSlide();
        $sliderRanger.css('left', (currentSlide/(slider.getSlideCount()-1))*100 + '%');
      }
    }

    var slider = Ember.$(this.element).find('ul').bxSlider(config);
    
    this.set('slider', slider);   
    
  },

  willDestroyElement () {
    this.get('slider').destroySlider();
  }
});