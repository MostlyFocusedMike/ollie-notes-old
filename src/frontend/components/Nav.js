import React from 'react';
import { UserAdapter } from '../adapters';

const Users = () => {
    return (
        <div id='nav-main'>
            <ul>
                <li>Ollie Notes</li>
                <li>Users</li>
                <li>Notes</li>
                {
                    UserAdapter.isCurrentUserSet()
                        ? <li>Profile</li>
                        : <li>Login</li>
                }
            </ul>
        </div>
    );
};

export default Users;
