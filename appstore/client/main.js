import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
/*import AppDetail from './components/app_details';
import AppPage from './components/app_page';*/

import '/imports/routes';



import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



Meteor.startup(() => {
  ReactDOM.render(<NavBar />, document.querySelector('#navbar'));
})
