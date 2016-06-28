import { Meteor } from 'meteor/meteor';
import { Apps } from '../imports/collections/apps'

Meteor.startup(() => {
  
  // publications
  Meteor.publish("singleApp", function(app_id) {
    return Apps.find({app_id : app_id});
  });

  Meteor.publish('apps', function(per_page) {
    return Apps.find({}, { limit: per_page });
  });
});
