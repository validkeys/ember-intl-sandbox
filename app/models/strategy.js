import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),


  // would probably want this to come from the database
  // so that it's consistent and not dependent on text
  intlKey: Ember.computed('name', function() {
    return `strategies.${this.get('name')}`;
  })
});
