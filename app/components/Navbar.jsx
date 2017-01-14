import React from 'react';
import Signup from './Signup';
import WhoAmI from './WhoAmI';
import Login from './Login';


export default function (props) {
  return (
    <div>
      <nav>
        <div className="col-xs-8">Test</div>
        <div className="col-xs-4">Test</div>
        {props.user ? null : <Signup/>}
        {props.user ? <WhoAmI/> : <Login/>}
      </nav>
    </div>
  );
}
