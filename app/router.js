import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('paths', {path: "/paths"}, function(){
    this.route('path', { path: "/:some_id" });
  });
});

export default Router;
