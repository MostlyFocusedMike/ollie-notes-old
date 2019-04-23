import React, { useState, useEffect } from 'react';
import { UserAdapter } from '../adapters';

const Users = () => {
    const [usersState, setUsersState] = useState([]);

    // https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    // https://www.andreasreiterer.at/react-useeffect-hook-loop/
    useEffect(() => {
        UserAdapter.list().then(users => setUsersState(users));
    }, []);

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
}

export default Users;
