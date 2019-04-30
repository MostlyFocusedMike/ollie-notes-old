import React, { useState, useEffect } from 'react';

const Users = () => {
    const [currentUserState, setCurrentUserState] = useState({
        profile: 'TEST',
    });

    return (
        <div id='nav-main'>
            <ul>
                <li>Ollie Notes</li>
                <li>Users</li>
                <li>Notes</li>
                <li>Profile</li>
            </ul>
        </div>
    );
};

export default Users;
