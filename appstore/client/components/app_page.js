import React from 'react';
import NavBar from './navbar';
import AppDetail from './app_details';
import { Apps } from '/imports/collections/apps';


const AppPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var app_id = this.props.params.app_id;
    var handle = Meteor.subscribe("singleApp", app_id);

    return {
      subsready : handle.ready(),
      app : Apps.find({}).fetch()
    };
  },

  getContent() {
    return (
      <div className="container">

        <div id="app_detail" className="row">
          <AppDetail app={this.data.app[0]} />
        </div>
      </div>
    );
  },

  render() {
    return this.data.subsready ? this.getContent() : <div></div>;
  }
})

export default AppPage;
