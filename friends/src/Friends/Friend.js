import React from 'react';
import './Friend.css'

function friend(props) {
    return (
        <div className="friend">
            <div className="friend-name">
                {props.friends.name}
            </div>
            <div className="friend-age">
                {`Age: ${props.friends.age}`}
            </div>
            <div className="friend-email">
                {props.friends.email}
            </div>
        </div>
    )
};


export default friend;