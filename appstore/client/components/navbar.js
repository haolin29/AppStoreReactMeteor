import React from 'react'



const NavBar = () => {
  const homepath = '/all'

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top">
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
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td><a href="/金融理财">金融理财</a></td>
              <td><a href="/实用工具">实用工具</a></td>
              <td><a href="/学习办公">学习办公</a></td>
              <td><a href="/医疗健康">医疗健康</a></td>
              <td><a href="/影音娱乐">影音娱乐</a></td>
              <td><a href="/社交通讯">社交通讯</a></td>
              <td><a href="/出行导航">出行导航</a></td>
              <td><a href="/动作射击">动作射击</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NavBar;
