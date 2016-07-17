import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppPage from '/client/components/app_page';
import AppList from '/client/components/app_list';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// /apps?app_id=xxxxxxx
// /apps?category=xxxxxxx
// /apps?keyword=xxxxxx
// /  index
// <Route path="/" component={ AppList } />
// <Route path="/:category" component={ AppList } />
// <Route path="/app/:app_id" component={ AppPage } />

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={ browserHistory }>
      <Route path="/" component = { AppList } />
      <Route path="/apps/query=:app_name" component={ AppList } />
      <Route path="/apps/category=:category" component={ AppList } />
      <Route path="/apps/app_id=:app_id" component={ AppPage } />
    </Router>,
    document.querySelector('.container')
  );
});
