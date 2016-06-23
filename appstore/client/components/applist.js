import React from 'react';
import AppItem from './appitem'

const IMAGES = [
  { title: '1号店', link: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/575b7c0d9311403b9ea352bb3187fa3e.png' },
  { title: '全国违章查询', link: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/fb6aa66243f54a8ca7feb80a0e2b1e32.png' },
  { title: '单机斗地主', link: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/c3d3b0e7c29945a7ad75b08b0350a922.png' }
];

const AppList = () => {

  const RenderedApps = IMAGES.map(image =>
    <AppItem key={image.title} image={image} />
  );

  return (
    <ul className="media-list">
      {RenderedApps}
    </ul>
  );
};

export default AppList
