import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppPage from '/client/components/app_page';
import AppList from '/client/components/app_list'


Meteor.startup(() => {
  ReactDOM.render(
    <Router history={ browserHistory }>
      <Route path="/app/:app_id" component={ AppPage } />
      <Route path="/" component={ AppList } />
    </Router>,
    document.querySelector('.container')
  );
});