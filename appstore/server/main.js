import { Meteor } from 'meteor/meteor';
import { Apps } from '../imports/collections/apps';

SearchSource.defineSource('apps', function(searchText, options) {
  var options = {sort: {rate: -1}, limit: 20};

  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {app_name: regExp};
    return Apps.find(selector, options).fetch();
  } else {
    return Apps.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  var words = searchText.trim().split(/[ \-\:]+/);
  var exps = _.map(words, function(word) {
    return "(?=.*" + word + ")";
  });
  var fullExp = exps.join('') + ".+";
  return new RegExp(fullExp, "i");
};

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
