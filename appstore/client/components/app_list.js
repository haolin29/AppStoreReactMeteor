import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '../../imports/collections/apps';
import AppThumbnail from './app_thumbnail';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 


const PER_PAGE = 35;

class AppList extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.state = {open: false};
  }
  
  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('apps', { sort : {rate : 1, download_times : -1}, limit:  PER_PAGE * (this.page + 1)});
    this.page += 1;
  }

  render() {
    // props.employees => an array of employee objects
    return (
      
      <div>

      <MuiThemeProvider>
        <div>
          <AppBar
          title="Meteor App Store"
          iconClassNameRight="muidocs-icon-navigation-expand-more" 
          onLeftIconButtonTouchTap={this.handleToggle}
          />


          <Drawer open={this.state.open}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        
        </div>
      </MuiThemeProvider>
      
    
       

        <div className="app-grid">
          {this.props.apps.map(app =>
            <AppThumbnail key={app._id} app={app} />
          )}
        </div>
        <button onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary">
          Load More...
        </button>
      </div>
    );
  }
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('apps', PER_PAGE);

  // return an object.  Whatever we return will be sent to EmployeeList
  // as props
  return { apps: Apps.find({}).fetch() };
}, AppList);
