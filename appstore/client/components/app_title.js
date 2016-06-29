import React from 'react';

const AppTitle = ({ app }) => {

  return (
    <div className="row">
      <div className="col-md-2">
        <img className="img-thumbnail" src={ app.icon_url } />
      </div>
      <div className="col-md-8">
        <h4>{ app.app_name }</h4>
        <table>
          <tbody>
            <tr>
              <td>
                <small>应用类型： {app.category}</small>
              </td>
              <td>
                <small>应用评分： {app.rate} 星</small>
              </td>
              <td>
                <small>下载量： {app.download_times}</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-2">
        <button className="btn btn-primary btn-download">
          <a className="download_url" href={app.download_url} >Download</a>
        </button>
      </div>
    </div>
  );
};

export default AppTitle;
