import Ember from 'ember';

export default Ember.Route.extend({

  intl: Ember.inject.service(),

  beforeModel() {
    this.get('intl').setLocale('en-us');
  },

  model() {
    return this.store.findAll('strategy');
  },

  actions: {
    setLocale(locale) {
      this.get('intl').setLocale(locale);
    }
  }

});
