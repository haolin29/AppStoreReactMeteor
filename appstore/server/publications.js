import ReactDOM from 'react-dom';
import React from 'react';
import { Apps } from '../imports/collections/apps';
//import AppPage from '../client/components/app_page';

// Meteor.startup(function () {
//   // Global API configuration
//   var Api = new Restivus({
//     useDefaultAuth: true,
//     prettyJson: true,
//     apiPath: ''
//   });
//
//   // Generates: GET, POST on /api/items and GET, PUT, DELETE on
//   // /api/items/:id for the Items collection
//   Api.addCollection(Apps);
//   console.log("starting...");
//   // Given the url: "/app?app_id=1234"
//   Api.addRoute('app', {
//     get: function () {
//       var app_id = this.queryParams.app_id;
//       console.log("app_id: " + app_id); // result: 1234
//       return app_id;
//       //ReactDOM.render(<AppPage app_id={app_id}/>,  document.querySelector('.container'));
//     }
//   });
// });
