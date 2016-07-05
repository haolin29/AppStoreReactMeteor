import { Meteor } from 'meteor/meteor';
import { Apps } from '../imports/collections/apps'

Meteor.startup(() => {

  // publications
  Meteor.publish("singleApp", function(app_id) {
    var app = Apps.find({app_id : app_id});
    // if (app.count() == 0) {
    //   var pythonShell = require("python-shell");
    //   var options = {
    //     args: [app_id],
    //     scriptPath: "/Users/lieyongzou/Documents/Project/BitTiger-AppStore/appstore/server/"
    //     // scriptPath: "test/python/"
    //   };
    //
    //   pythonShell.run("huawei_crawler.py", options, function(err) {
    //     if (err) {
    //       throw err;
    //     }
    //   });
    // }

    return app;
  });

  Meteor.publish('apps', function(options) {
    return Apps.find({}, options);
  });

  Meteor.publish('appsByCategory', function(category, options) {
    return Apps.find({category : category}, options);
  })
});
