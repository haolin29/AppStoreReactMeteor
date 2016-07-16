import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Apps } from '../../imports/collections/apps';
import AppThumbnail from './app_thumbnail';
import InfiniteScroll from 'react-component-infinite-scroll';


const PER_PAGE = 35;


class AppList extends Component {

  // whatever method you want InfiniteScroll to call
  nextPage() {
    this.loadMore();
  }

  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.state = { open: false };

  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  loadMore() {

<<<<<<< HEAD
    if(this.props.params.category == undefined){
=======
    if(this.props.params.category == null){
>>>>>>> origin/master
      Meteor.subscribe('apps', { sort : {download_times : -1, rate : -1}, limit:  PER_PAGE * (this.page + 1)});
    }else{
      Meteor.subscribe('appsByCategory', this.props.params.category, { sort : {download_times : -1, rate : -1}, limit:  PER_PAGE * (this.page + 1)});

    }
    this.page += 1;
  }


  componentWillMount() {
    this.page = 1;

  }

  render() {
    return (
    <div>

        <InfiniteScroll nextPage={ this.nextPage.bind(this) } threshold={ 600 } >
          <div className="app-list">
              <div className="app-grid">
                  {this.props.apps.map(app =>
                    <AppThumbnail key={app._id} app={app} /> )}
              </div>
          </div>
        </InfiniteScroll>

    </div>

    );
  }
};


export default createContainer((props) => {

  var category = props.params.category;

  // set up subscription
<<<<<<< HEAD
  if (category == undefined) {
=======
  if (category == null) {
>>>>>>> origin/master
    Meteor.subscribe('apps', { sort : {download_times : -1, rate : -1}, limit:  PER_PAGE});
  } else {
    Meteor.subscribe('appsByCategory', category, { sort : {download_times : -1, rate : -1}, limit:  PER_PAGE})
  }

  // return an object.  Whatever we return will be sent to AppList
  // as props
  return { apps: Apps.find({}).fetch() };
}, AppList);
