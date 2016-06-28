import { Meteor } from 'meteor/meteor';
import { Apps } from '../imports/collections/apps'

Meteor.startup(() => {
  // code to run on server at startup

  // Get the number of data in mongodb
  // const numberRecords = Apps.find({}).count();
  // // const app = Apps.find({app_id : 'C10179513'}).fetch()
  // // console.log(app);
  //
  // // If no data, load data to mondo db
  // if (!numberRecords) {
  //   var pythonShell = require('python-shell');
  //
  //   pythonShell.run('../server/huawei_crawler.py', function (err) {
  //     if (err) throw err;
  //     console.log('finished');
  //   });
  // }


  // publications
  Meteor.publish("singleApp", function(app_id) {
    return Apps.find({app_id : app_id});
  });

  Meteor.publish('apps', function(per_page) {
    return Apps.find({}, { limit: per_page });
  });
});
