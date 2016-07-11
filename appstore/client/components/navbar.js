import React from 'react'



const NavBar = () => {
  const homepath = '/all'

  return (
    <nav className="navbar navbar-inverse navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">萌猫APP商城</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a className="active" href="/all">主页</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">分类</a>
            <ul className="dropdown-menu">
              <li><a href="/金融理财">金融理财</a></li>
              <li><a href="/实用工具">实用工具</a></li>
              <li><a href="/影音娱乐">影音娱乐</a></li>
              <li><a href="/社交通讯">社交通讯</a></li>
              <li><a href="/医疗健康">医疗健康</a></li>
              <li><a href="/动作射击">动作射击</a></li>
              <li><a href="/学习办公">学习办公</a></li>
              <li><a href="/出行导航">出行导航</a></li>
            </ul>
          </li>
        </ul>

      </div>
    </nav>



  );
};

export default NavBar;
