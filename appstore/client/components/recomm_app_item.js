import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '/imports/collections/apps';


const RecommAppItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var app_id = this.props.app_id;
    var handle = Meteor.subscribe("singleApp", app_id);

    return {
      subsready : handle.ready(),
      app : Apps.find({}).fetch()
    };
  },

  getContent() {
    return (
      <li className="media list-group-item">
        <div>
          <div className="media-left">
            <img src={this.data.app[0].icon_url} />
          </div>
          <div className="media-body">
            <a>
              <font className="media-heading">
                {this.data.app[0].app_name}
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
