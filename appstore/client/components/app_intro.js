import React from 'react';

const AppIntro = ({ app }) => {

  const Content = ({ content }) => {
    return <p>{ content }</p>;
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="intro_panel">
          <strong>应用简介:</strong>
          <p></p>
          {app.full_intro.map(content => <Content key={ content } content={ content } />)}
        </div>

      </div>
    </div>
  );
};

export default AppIntro;
