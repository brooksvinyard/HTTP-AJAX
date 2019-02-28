import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function header(props) {
    return (
        <div className="header">
            <div className="left">
            <Link to={`/`}><h2>All My Friends</h2></Link>
            </div>
            <div className="right">
                <Link to={`/friend-form`}><p>Add Friend</p></Link>
            </div>
        </div>
    )
};


export default header;




