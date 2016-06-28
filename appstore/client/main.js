import React from 'react';
import ReactDOM from 'react-dom';
/*import NavBar from './components/navbar';
import AppDetail from './components/app_details';
import AppPage from './components/app_page';*/

import '/imports/routes';
import { Router, Route, browserHistory } from 'react-router';

import AppList from './components/app_list';

// const App = () => {
//   return (
//     <div>
//       <AppGrids />
//     </div>
//   );
// };
//
// Meteor.startup(() => {
//   ReactDOM.render(<App />, document.querySelector('.container'));
// });
// Meteor.startup(() => {
//   // ReactDOM.render(<AppPage />, document.querySelector('#react-root'));
//   // ReactDOM.render(<AppDetail />, document.querySelector('#app_detail'));
//   console.log("Hello");
//
// });
