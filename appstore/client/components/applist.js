import React from 'react';
import AppItem from './appitem'

//{app.recomm_apps.map(app_id => <AppItem key={ app_id } app_id={ app_id } />)}

const AppList = ({ app }) => {
  return (
    <ul className="media-list">
      <AppItem app_id={app.recomm_apps[0]} />
    </ul>
  );
};

export default AppList
