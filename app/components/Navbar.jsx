import React from 'react';
import Signup from './Signup';
import WhoAmI from './WhoAmI';
import Login from './Login';


export default function (props) {
  return (
    <div>
      <nav>
        {props.user ? null : <Signup/>}
        {props.user ? <WhoAmI/> : <Login/>}
      </nav>
    </div>
  );
}
