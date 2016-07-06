import React from 'react';
import { Apps } from '../../imports/collections/apps';
import RecommAppItem from './recomm_app_item'

//{app.recomm_apps.map(app_id => <AppItem key={ app_id } app_id={ app_id } />)}
const RecommAppList = ({app}) => {
  return (
    <ul className="media-list">
      {app.recomm_apps.map(app_id => <RecommAppItem key = {app_id} app_id = {app_id}/>)}
    </ul>
  );
};

export default RecommAppList;
