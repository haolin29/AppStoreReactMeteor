import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '/imports/collections/apps';
import {Link} from 'react-router'

const RecommAppItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var app_id = this.props.app_id;
    var handle = Meteor.subscribe("singleApp", app_id);
    /*console.log(app_id);*/
    return {
      subsready : handle.ready(),
      app : Apps.find({app_id}).fetch()
    };
  },

  getContent() {
    var app_id = this.props.app_id;
    const path = `/app/${app_id}`
    return (
      <li className="media list-group-item">
        <div>
          <div className="media-left">
          <Link to={path}>
            <img src={this.data.app[0].icon_url} />
          </Link>
          </div>
        
          <div className="media-body">
            <a>
              <font className="media-heading">
              <Link to={path}>
                {this.data.app[0].app_name}
              </Link>
              </font>
            </a>
          </div>
        </div>
      </li>
    );
  },

  render() {
    return this.data.subsready ? this.getContent() : <div></div>;
  }
});

export default RecommAppItem;