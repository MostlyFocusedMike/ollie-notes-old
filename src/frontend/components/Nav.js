import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAdapter } from '../adapters';
import appContext from '../context';

const Users = () => {
    const context = useContext(appContext);
    console.log('context: ', context);
    return (
        <nav id='nav-main'>
            <ul>
                <li><Link to='/' id='nav-logo'>Ollie Notes</Link></li>
                <li><Link to='/users'>Users</Link></li>
                {
                    context.currentUser
                        ? <li>Profile</li>
                        : <li><Link to='/login'>Login</Link></li>
                }
            </ul>
        </nav>
    );
};

export default Users;
