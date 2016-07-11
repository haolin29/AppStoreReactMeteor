import { Meteor } from 'meteor/meteor';
import { Apps } from '../imports/collections/apps'

Meteor.startup(() => {

  // publications
  Meteor.publish("singleApp", function(app_id) {
    var app = Apps.find({app_id : app_id});
    return app;
  });

  Meteor.publish('apps', function(options) {
    return Apps.find({}, options);
  });

  Meteor.publish('appsByCategory', function(category, options) {
    return Apps.find({category : category}, options);
  })

});
