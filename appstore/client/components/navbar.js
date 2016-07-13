import React from 'react'



const NavBar = () => {
  const homepath = '/all'

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top navbar-no-margin">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">萌猫应用商城</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a className="active" href="/all">主页</a></li>
            <li className="dropdown">
              <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">分类</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="collapse" id="exCollapsingNavbar">
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="/金融理财">金融理财</a></li>
              <li><a href="/实用工具">实用工具</a></li>
              <li><a href="/学习办公">学习办公</a></li>
              <li><a href="/医疗健康">医疗健康</a></li>
              <li><a href="/影音娱乐">影音娱乐</a></li>
              <li><a href="/出行导航">出行导航</a></li>
              <li><a href="/休闲益智">休闲益智</a></li>
              <li><a href="/经营策略">经营策略</a></li>
              <li><a href="/实用工具">实用工具</a></li>
              <li><a href="/新闻阅读">新闻阅读</a></li>
              <li><a href="/社交通讯">社交通讯</a></li>
              <li><a href="/拍摄美化">拍摄美化</a></li>
              <li><a href="/动作射击">动作射击</a></li>
              <li><a href="/主题个性">主题个性</a></li>
              <li><a href="/棋牌天地">棋牌天地</a></li>
              <li><a href="/体育竞技">体育竞技</a></li>
              <li><a href="/飞行射击">飞行射击</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
