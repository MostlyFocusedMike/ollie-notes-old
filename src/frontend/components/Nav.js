import React from 'react';
import { Link } from 'react-router-dom';
import { UserAdapter } from '../adapters';

const Users = () => {
    return (
        <nav id='nav-main'>
            <ul>
                <li><Link to='/' id='nav-logo'>Ollie Notes</Link></li>
                <li><Link to='/users'>Users</Link></li>
                {
                    UserAdapter.isCurrentUserSet()
                        ? <li>Profile</li>
                        : <li><Link to='/login'>Login</Link></li>
                }
            </ul>
        </nav>
    );
};

export default Users;
