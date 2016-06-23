import React from 'react';

const AppItem = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} />
      </div>
      <div className="media-body">
        <a>
          <font className="media-heading">
            {props.image.title}
          </font>
        </a>
      </div>
    </li>
  );
};

export default AppItem;
