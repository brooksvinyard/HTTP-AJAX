import React from 'react';
import './Friend.css'

function friendCard({friends, match, deleteFriend, setUpdateForm}) {
    const { id } = match.params;
    const friend = friends.find(thing => `${thing.id}` === id);

    if (!friend) {
        return <h3>Loading friend...</h3>;
      }
    return (
        <div className="friend-list">
        <div className="friend-card">
            <div className="friend-name">
                {friend.name}
            </div>
            <div className="friend-age">
                {`Age: ${friend.age}`}
            </div>
            <div className="friend-email">
                {friend.email}
            </div>
            <button onClick={e => setUpdateForm(e, friend)}>Update</button>
            <button onClick={e => deleteFriend(e, friend.id)}>Delete</button>
        </div>
        </div>
    )
};


export default friendCard;