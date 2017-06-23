import Ember from 'ember';
import { hrefTo } from 'translations/helpers/href-to'

export default Ember.Component.extend({
  intl: Ember.inject.service(),

  currentUser: Ember.Object.create({
    id: 1
  }),

  key: Ember.computed('activity.code', function() {
    return `activities.${this.get('activity.code')}`;
  }),

  textKey: Ember.computed('key', function() {
    return `${this.get('key')}.text`;
  }),

  htmlKey: Ember.computed('key', function() {
    return `${this.get('key')}.html`;
  }),


  /* ************ LINKS ***********

    It's not going to be easy to just use regular URLs.
    BUT, this is a benefit because we will have more control.
    For each event, you will need to generate the paths and segments
    (ex. 'teams.team.clients.client' teamId clientId) and then use the
    ember-href-to helper like below.
  */


  // TODO: This could be some sort of service with handlers for each activity type
  messageArgs: Ember.computed('activity.code', function() {

    let actor   = this.get('activity.refs.actor.data');
    let object  = this.get('activity.refs.object.data');

    let actorName   = (actor.id === this.get('currentUser.id')) ? 'you' : actor.get('name');
    let objectName  = (object.id === this.get('currentUser.id')) ? 'you' : object.get('name');

    return {
      actor: actorName,
      actorURL: hrefTo(this, 'paths.path', 1),
      object: objectName,
      messageText: this.get('activity.refs.message.data.text')
    };
  }),

  message: Ember.computed('textKey','messageArgs','intl.locale', function() {
    let messageFormat = this.get('intl').lookup(this.get('textKey'));
    return this.get('intl').formatMessage(messageFormat, this.get('messageArgs'));
  }),

  htmlMessage: Ember.computed('htmlKey','messageArgs','intl.locale', function() {
    let messageFormat = this.get('intl').lookup(this.get('htmlKey'));
    return Ember.String.htmlSafe(this.get('intl').formatMessage(messageFormat, this.get('messageArgs')));
  }),
});
