import React from 'react';
import {Link} from 'react-router'

const AppThumbnail = ({ app }) => {
  const { app_name, icon_url, short_intro, rate , app_id} = app;
  const path = `/app/${app_id}`
  return (
    <div className="thumbnail">
    <Link to={path}>
      <img src={icon_url} />
    </Link>
      <div className="caption">
        <h5><Link to={path}>{app_name}</Link></h5>
        <ul className="list-group">
          <li className="list-group-item"> {rate}</li>
        </ul>
      </div>
    </div>
  );
};

export default AppThumbnail;
