import React from 'react';
import {Link} from 'react-router'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import StarRate from './star_rate';


const AppThumbnail = ({ app }) => {
  const { app_name, icon_url, short_intro, rate , app_id, download_times} = app;
  const path = `/apps/app_id=${app_id}`;
  return (
   <div className="thumbnail round-border flex-item">
   <a href={path}>
     <img src={icon_url} />
   </a>
     <div className="caption align-center">
       <h5><a href={path}>{app_name}</a></h5>
      <StarRate rate = {app.rate} name = { app_name }/>
     </div>
   </div>
      );

};

export default AppThumbnail;
