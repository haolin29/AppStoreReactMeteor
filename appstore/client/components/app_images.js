import React from 'react';



const AppImage = ({ app }) => {

  const ImageItem = ({ img_url }) => {
    return (
      <li>
        <img className="thumbnail" src={ img_url } />
      </li>
    );
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="img_list">
          <ul>
            {app.app_img.map(img_url => <ImageItem key={ img_url } img_url={ img_url } />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppImage;
