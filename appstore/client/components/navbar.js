import React from 'react';


class NavBar extends React.Component {
  constructor () {
    super();
    this.state = { term:''};
  }

  onInputChange(term) {
    this.setState({term});
  }

  _buildLinkHref() {
    let query = '/apps/query='+this.state.term;
    return query;
  }

  render() {

    return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top navbar-no-margin">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">萌猫应用商城</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a className="active" href="/">主页</a></li>
            <li className="dropdown">
              <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">分类</a>
            </li>
          </ul>
          <div className="col-md-3 navbar-right">
              <form className="navbar-form" role="search">
              <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search"  
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    />

                  <div className="input-group-btn">
                      <a id="clicking" className="btn btn-default" href={this._buildLinkHref()}><i className="glyphicon glyphicon-search"></i></a>
                  </div>
              </div>
              </form>
          </div>
        </div>
      </nav>
      <div className="collapse" id="exCollapsingNavbar">
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="/apps/category=金融理财">金融理财</a></li>
              <li><a href="/apps/category=实用工具">实用工具</a></li>
              <li><a href="/apps/category=学习办公">学习办公</a></li>
              <li><a href="/apps/category=医疗健康">医疗健康</a></li>
              <li><a href="/apps/category=影音娱乐">影音娱乐</a></li>
              <li><a href="/apps/category=出行导航">出行导航</a></li>
              <li><a href="/apps/category=休闲益智">休闲益智</a></li>
              <li><a href="/apps/category=经营策略">经营策略</a></li>
              <li><a href="/apps/category=实用工具">实用工具</a></li>
              <li><a href="/apps/category=新闻阅读">新闻阅读</a></li>
              <li><a href="/apps/category=社交通讯">社交通讯</a></li>
              <li><a href="/apps/category=拍摄美化">拍摄美化</a></li>
              <li><a href="/apps/category=动作射击">动作射击</a></li>
              <li><a href="/apps/category=主题个性">主题个性</a></li>
              <li><a href="/apps/category=棋牌天地">棋牌天地</a></li>
              <li><a href="/apps/category=体育竞技">体育竞技</a></li>
              <li><a href="/apps/category=飞行射击">飞行射击</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
  }
}

export default NavBar;
