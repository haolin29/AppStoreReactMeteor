import React from 'react';
import NavBar from './navbar';
import AppDetail from './app_details';
import { Apps } from '/imports/collections/apps';
import { createContainer } from 'meteor/react-meteor-data';

const AppPage = ({ apps }) => {
  // Meteor.subscribe("singleApp", params._id);

  return (
      <div class="container">
        <div class="row">
          <div id="navbar">
            <NavBar />
          </div>
        </div>

        <div id="app_detail" class="row">
          {apps.map(app => <AppDetail key={ app._id } app={ app }/>)}
        </div>
      </div>
  );
};


export default createContainer(({ params }) => {

  // set up subscription
  Meteor.subscribe('singleApp', params._id);

  return { apps: Apps.find({}).fetch() };
}, AppPage);
