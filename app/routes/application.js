import Ember from 'ember';

const ACTIVITIES = [
  {
    code: "USER_MENTIONED",
    actionUrl: "/",
    refs: {
      actor: {
        data: Ember.Object.create({
          id:   1,
          name: "Kyle Davis"
        })
      },
      object: {
        data: Ember.Object.create({
          id: 2,
          name: "Rick Claydon"
        })
      },
      message: {
        data: {
          text: "This is a message!"
        }
      }
    }
  }
];

export default Ember.Route.extend({

  intl: Ember.inject.service(),

  beforeModel() {
    this.get('intl').setLocale('en-us');
  },

  model() {
    return this.store.findAll('strategy');
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('activities', Ember.A(ACTIVITIES));
  },

  actions: {
    setLocale(locale) {
      this.get('intl').setLocale(locale);
    }
  }

});
