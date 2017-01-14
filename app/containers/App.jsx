import React from 'react';

import NavbarContainer from '../containers/NavbarContainer';

export default function (props) {
  return (
    <div id="main" className="container">
      <NavbarContainer />
      <div className="col-xs-10">
        {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
    </div>
  );
}
