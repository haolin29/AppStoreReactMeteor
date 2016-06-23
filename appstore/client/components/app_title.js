import React from 'react';

const AppTitle = () => {

  return (
    <div className="row">
      <div className="col-md-2 col-md-offset-1">
        <img className="img-thumbnail" src="http://appimg.hicloud.com/hwmarket/files/application/icon144/1065c9222e874ceaac21ea366f5c4ffb.png" />
      </div>
      <div className="col-md-7">
        <h4>车来了</h4>
        <table>
          <tbody>
            <tr>
              <td>
                <small>应用类型： 出行导航</small>
              </td>
              <td>
                <small>应用评分： 9 星</small>
              </td>
              <td>
                <small>下载量： 8538678</small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-2">
        <button className="btn btn-primary btn-download">Download</button>
      </div>
    </div>
  );
};

export default AppTitle;
