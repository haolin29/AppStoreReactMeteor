import React from 'react';
import NavBar from './navbar';
import AppDetail from './app_details';
import { Apps } from '/imports/collections/apps';
import { createContainer } from 'meteor/react-meteor-data';

const AppPage = ({ app }) => {
  // Meteor.subscribe("singleApp", params._id);

  return (
      <div class="container">
        <div class="row">
          <div id="navbar">
            <NavBar />
          </div>
        </div>

        <div id="app_detail" class="row">
          <AppDetail />
        </div>
      </div>
  );
};


export default createContainer(({ params }) => {
  console.log(params._id);

  // set up subscription
  Meteor.subscribe('singleApp', params._id);

  return { app: Apps.find({}).fetch()[0] };
}, AppPage);
