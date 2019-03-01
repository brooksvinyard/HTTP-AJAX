import React from 'react';
import FriendList from './Friends/FriendList';


function home(props) {
    return (
        <FriendList friends={props.friends} setUpdateForm={props.setUpdateForm} />
    )
};


export default home;