import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import AppDetail from './components/app_details';



Meteor.startup(() => {
  ReactDOM.render(<NavBar />, document.querySelector('#navbar'));
  ReactDOM.render(<AppDetail />, document.querySelector('#app_detail'));
});
