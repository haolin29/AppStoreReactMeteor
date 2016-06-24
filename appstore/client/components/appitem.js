import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '/imports/collections/apps';



const AppItem = ({ apps }) => {

  const Item = ({ app }) => {
    return (
      <div>
        <div className="media-left">
          <img src={app.icon_url} />
        </div>
        <div className="media-body">
          <a>
            <font className="media-heading">
              {app.app_name}
            </font>
          </a>
        </div>
      </div>
    );
  };

  console.log(apps);
  return (
    <li className="media list-group-item">
      {apps.map(app => <Item key={ app._id } app={ app }/>)}
    </li>
  );
};

export default createContainer(({ app_id }) => {
  console.log(app_id);
  // set up subscription
  Meteor.subscribe('singleApp', app_id);

  return { apps: Apps.find({}).fetch() };
}, AppItem);
