import React from 'react';
import Friend from './Friend'

function friendList(props) {
  if (props.friends.length === 0) {
    return <h3>Loading friends...</h3>;
  }
    return (
        <div className="friend-list">
          {props.friends.map(e => (<Friend friends={e} key={e.name} setUpdateForm={props.setUpdateForm} /> ))}
      </div>
    )
};


export default friendList;