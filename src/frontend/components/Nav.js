import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../context';

const Users = () => {
    const context = useContext(appContext);
    console.log('context in the nav: ', context);
    return (
        <nav id='nav-main'>
            <ul>
                <li><Link to='/' id='nav-logo'>Ollie Notes</Link></li>
                <li><Link to='/users'>Users</Link></li>
                {
                    context.currentUser
                        ? <li><Link to={`/users/${context.currentUser}`}>Profile</Link></li>
                        : <li><Link to='/login'>Login</Link></li>
                }
            </ul>
        </nav>
    );
};

export default Users;
