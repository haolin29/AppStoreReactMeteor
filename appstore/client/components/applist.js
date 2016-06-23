import React from 'react';
import AppItem from './appitem'

const IMAGES = [
  { title: 'Pen', link: 'http://dummyimage.com/60x60' },
  { title: 'Pine Tree', link: 'http://dummyimage.com/60x60' },
  { title: 'Mug', link: 'http://dummyimage.com/60x60' }
];

const AppList = () => {

  const RenderedApps = IMAGES.map(image =>
    <AppItem key={image.title} image={image} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedApps}
    </ul>
  );
};

export default AppList
