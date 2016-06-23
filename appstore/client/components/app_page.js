import React from 'react';
import NavBar from './navbar';
import AppDetail from './app_details';

const AppPage = () => {
  return (
      <div class="container">
        <div class="row">
          <div id="navbar">
            <NavBar />
          </div>
        </div>

        <div id="app_detail" class="row">
          <AppDetail />
        </div>
      </div>
  );
};

export default AppPage;
