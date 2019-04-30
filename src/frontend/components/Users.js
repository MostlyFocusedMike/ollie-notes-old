import React, { useState, useEffect } from 'react';
import { UserAdapter } from '../adapters';

const Users = () => {
    const [usersState, setUsersState] = useState([]);

    useEffect(() => {
        UserAdapter.list().then(users => setUsersState(users));
    }, []); // check tutorials > tech stack > react hooks for this []

    return (
        <div id='users-list'>
            <h1>users</h1>
            {
                usersState.map((user) => {
                    return <p key={ user.username }>{ user.username }</p>;
                })
            }
        </div>
    );
};

export default Users;
