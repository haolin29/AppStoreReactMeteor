import React from 'react';
import AppItem from './appitem'

//{app.recomm_apps.map(app_id => <AppItem key={ app_id } app_id={ app_id } />)}

const AppList = ({ app }) => {
  return (
    <ul className="media-list">
      {app.recomm_apps.map(app_id => <AppItem key={ app_id } app_id={ app_id } />)}
    </ul>
  );
};

export default AppList
