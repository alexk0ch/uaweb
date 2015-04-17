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

    var customControls = this.get('customControls'),
        chunked = +this.get('inRow');

    if (chunked) {
      var goods = $(this.element).find('ul > div');
      for(var i = 0; i < goods.length; i += chunked) {
        goods.slice(i, i + chunked).wrapAll("<li class='row'></li>");
      }
    }

    if (customControls) {
      config.nextSelector = '#' + this.element.id + ' .bl_popular__slide-arrow.right';
      config.prevSelector = '#' + this.element.id + ' .bl_popular__slide-arrow.left';
    }

    var slider = Ember.$(this.element).find('ul').bxSlider(config);
    
    this.set('slider', slider);   
    
  },

  willDestroyElement () {
    this.get('slider').destroySlider();
  }
});
