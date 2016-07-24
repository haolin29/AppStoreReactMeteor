import { Meteor } from 'meteor/meteor';
import { Apps } from '../imports/collections/apps';



Meteor.startup(() => {
  Apps._ensureIndex({
    "app_name": "text"
  });
  // publications
  Meteor.publish("singleApp", function(app_id) {
    let app = Apps.find({app_id : app_id});
    return app;
  });

  Meteor.publish('apps', function(options) {
    return Apps.find({}, options);
  });

  Meteor.publish('appsByCategory', function(category, options) {
    return Apps.find({category : category}, options);
  });

  Meteor.publish("search", function(app_name) {
    return Apps.find({ app_name : { $regex : ".*" + app_name + ".*"} });
  });

});
