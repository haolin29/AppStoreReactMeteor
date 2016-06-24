import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppPage from '/client/components/app_page';


Meteor.startup(() => {
  ReactDOM.render(
    <Router history={ browserHistory }>
      <Route path="/app/:app_id" component={ AppPage } />
    </Router>,
    document.querySelector('#react-root')
  );
});
