import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

function friend(props) {
    // const { id } = props.match.params;
    return (
        <div className="friend">
            <div className="friend-name">
            <Link to={`/friend-list/${props.friends.id}`} key={props.friends.id}> {props.friends.name} </Link>
            </div>
            <div className="friend-age">
                {`Age: ${props.friends.age}`}
            </div>
            <div className="friend-email">
                {props.friends.email}
            </div>
            {/* <button onClick={e => props.setUpdateForm(e, props.friends)}>Update</button>
            <button onClick={e => props.deleteFriend(e, props.friends)}>Remove</button> */}
        </div>
    )
};


export default friend;