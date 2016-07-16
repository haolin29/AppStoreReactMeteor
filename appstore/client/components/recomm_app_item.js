import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '/imports/collections/apps';
import {Link} from 'react-router';
import StarRate from './star_rate';


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
    const path = `/apps/app_id=${app_id}`
    return (
      <li className="media list-group-item">
        <div>
          <div className="media-left">
            <a href={path}>
              <img src={this.data.app[0].icon_url} />
            </a>
          </div>

          <div className="media-body">
            <h5 className="media-heading">
            <a href={path}>
              {this.data.app[0].app_name}
            </a>
            </h5>
            <StarRate name = {this.data.app[0].app_name} rate = {this.data.app[0].rate}/>
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
