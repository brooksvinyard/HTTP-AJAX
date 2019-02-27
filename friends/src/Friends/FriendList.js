import React from 'react';
import Friend from './Friend'

function friendList(props) {
    return (
        <div className="friend-list">
          {props.friends.map(e => (<Friend friends={e} key={e.name}/> ))}
      </div>
    )
};


export default friendList;