import React from 'react';
import FriendList from './Friends/FriendList';


function home(props) {
    return (
        <div>
        <FriendList friends={props.friends} />
      </div>
    )
};


export default home;