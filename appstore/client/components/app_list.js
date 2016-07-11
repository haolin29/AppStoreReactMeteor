import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '../../imports/collections/apps';
import AppThumbnail from './app_thumbnail';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Infinite from 'react-infinite';

const PER_PAGE = 35;


class AppList extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { open: false };

  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  handleButtonClick() {
    if(this.props.params.category == "all"){
      MMeteor.subscribe('apps', { sort : {rate : 1, download_times : -1}, limit:  PER_PAGE * (this.page + 1)});
    }else{
      Meteor.subscribe('appsByCategory', this.props.params.category, { sort : {rate : 1, download_times : -1}, limit:  PER_PAGE * (this.page + 1)});
    }
    this.page += 1;
  }


  componentWillMount() {
    this.page = 1;

  }

  // componentDidMount() {
  //   this.infiniteScroll({
  //     perPage: 35,                        // How many results to load "per page"
  //     query: {                            // The query to use as the selector in our collection.find() query
  //         sort : {rate : 1, download_times : -1}
  //     },
  //     //subManager: new SubsManager(),      // (optional, experimental) A meteorhacks:subs-manager to set the subscription on
  //                                         // Useful when you want the data to persist after this template
  //                                         // is destroyed.
  //     collection: 'Apps',             // The name of the collection to use for counting results
  //     //publication: 'CommentsInfinite'     // (optional) The name of the publication to subscribe.
  //                                         // Defaults to {collection}Infinite
  //   });
  // }

  render() {
    // props.employees => an array of employee objects
    const style = {
      margin: 12,
    };

    return (
<div>
    <MuiThemeProvider>
        <div style={style}>
          <AppBar title="App Store" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.handleToggle} />
          <div className="app-list">
              <Drawer open={this.state.open} docked={false} width={200} onRequestChange={(open)=> this.setState({open})}>
                  <MenuItem onTouchTap={this.handleToggle}>Menu Item</MenuItem>
                  <MenuItem onTouchTap={this.handleToggle}>Menu Item 2</MenuItem>
              </Drawer>
              <div className="app-grid">
                  {this.props.apps.map(app =>
                  <AppThumbnail key={app._id} app={app} /> )}
              </div>
          </div>
        </div>
    </MuiThemeProvider>

    <button onClick={this.handleButtonClick} className="btn btn-primary">
        Load More...
    </button>

</div>

    );
  }
};


export default createContainer((props) => {

  var category = props.params.category;
  // set up subscription
  if (category == "all") {
    Meteor.subscribe('apps', { sort : {rate : 1, download_times : -1}, limit:  PER_PAGE});
  } else {
    Meteor.subscribe('appsByCategory', category, { sort : {rate : 1, download_times : -1}, limit:  PER_PAGE})
  }


  // return an object.  Whatever we return will be sent to AppList
  // as props
  if(category == "all"){
    return { apps: Apps.find({}).fetch() };
  }else{
    return {apps : Apps.find({"category" : category}).fetch()}
  }
}, AppList);
