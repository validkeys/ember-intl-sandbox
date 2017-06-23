import Ember from 'ember';

export default Ember.Component.extend({
  intl: Ember.inject.service(),

  currentUser: Ember.Object.create({
    id: 1
  }),

  key: Ember.computed('activity.code', function() {
    return `activities.${this.get('activity.code')}`;
  }),

  // TODO: This could be some sort of service with handlers for each activity type
  messageArgs: Ember.computed('activity.code', function() {

    let actor   = this.get('activity.refs.actor.data');
    let object  = this.get('activity.refs.object.data');

    let actorName   = (actor.id === this.get('currentUser.id')) ? 'you' : actor.get('name');
    let objectName  = (object.id === this.get('currentUser.id')) ? 'you' : object.get('name');

    return {
      actor: actorName,
      object: objectName,
      messageText: this.get('activity.refs.message.data.text')
    };
  }),

  message: Ember.computed('key','messageArgs', function() {
    let messageFormat = this.get('intl').lookup(this.get('key'));
    return this.get('intl').formatMessage(messageFormat, this.get('messageArgs'));
  })

});
