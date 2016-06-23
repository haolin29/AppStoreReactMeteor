import React from 'react';
import AppTitle from './app_title';
import AppImage from './app_images';
import AppIntro from './app_intro';
import AppList from './applist';

const AppDetail = () => {

  return (
    <div>
      <div className="col-md-9">
        <AppTitle />
        <AppImage />
        <AppIntro />
      </div>
      <div className="col-md-3">
        <div className="title_bar">
          <font className="bar_title">相关推荐</font>
        </div>

        <AppList />
      </div>
    </div>
  );
};

export default AppDetail;
