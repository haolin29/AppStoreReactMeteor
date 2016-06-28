import React from 'react';

const AppThumbnail = ({ app }) => {
  const { app_name, icon_url, short_intro, rate } = app;

  return (
    <div className="thumbnail">
      <img src={icon_url} />
      <div className="caption">
        <h5>{app_name}</h5>
        <ul className="list-group">
          <li className="list-group-item"> {rate}</li>
        </ul>
      </div>
    </div>
  );
};

export default AppThumbnail;