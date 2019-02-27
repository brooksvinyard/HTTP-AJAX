import React from 'react';
import Friend from './Friend'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function friendList(props) {
    return (
        <div className="friend-list">
          {props.friends.map(e => (<Friend friends={e} key={e.name}/> ))}
      </div>
    )
};


export default friendList;