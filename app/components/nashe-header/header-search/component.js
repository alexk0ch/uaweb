import Ember from 'ember';

export default Ember.Component.extend({
  search : 1754,
  didInsertElement () {
    setInterval(()=>{
      this.set('search', Math.round(Math.random()*500 + 1000));
    }, 4000);
  }
});
