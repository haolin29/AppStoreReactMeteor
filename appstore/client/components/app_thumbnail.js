import React from 'react';
import {Link} from 'react-router'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const AppThumbnail = ({ app }) => {
  const { app_name, icon_url, short_intro, rate , app_id} = app;
  const path = `/app/${app_id}`;
  return (
//    <div className="thumbnail">
//    <a href={path}>
//      <img src={icon_url} />
//    </a>
//      <div className="caption">
//        <h5><a href={path}>{app_name}</a></h5>
//        <ul className="list-group">
//          <li className="list-group-item"> {rate}</li>
//        </ul>
//      </div>
//    </div>
      <div className="flex-item">
      <Card>
        <CardMedia>
          <a href={path}>
            <img src={icon_url} />
          </a>
        </CardMedia>
        <CardTitle title={ app_name } subtitle={ rate } />
      </Card>
      </div>
      );
  
};

export default AppThumbnail;
