import React from 'react';
import AppTitle from './app_title';
import AppImage from './app_images';
import AppIntro from './app_intro';
import RecommAppList from './recomm_app_list';

const AppDetail = ({ app }) => {
  return (
    <div>
      <div className="col-md-9">
        <AppTitle app={ app }/>
        <AppImage app={ app }/>
        <AppIntro app={ app }/>
      </div>
      <div className="col-md-3">
        <div className="title_bar">
          <font className="bar_title">相关推荐</font>
        </div>
        <RecommAppList app={ app }/>
      </div>
    </div>
  );
};

export default AppDetail;
