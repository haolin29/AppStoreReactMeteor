import { Meteor } from 'meteor/meteor';
import { Apps } from '../lib/collections/apps'

Meteor.startup(() => {
  // code to run on server at startup

  // Get the number of data in mongodb
  const numberRecords = Apps.find({}).count();

  // If no data, load data to mondo db
  if (!numberRecords) {
    var pythonShell = require('python-shell');

    pythonShell.run('../server/huawei_crawler.py', function (err) {
      if (err) throw err;
      console.log('finished');
    });
  }

 
});
