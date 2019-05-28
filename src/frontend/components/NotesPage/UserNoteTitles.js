import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UserAdapter } from '../../adapters';
import appContext from '../../context';

const UserNoteTitles = (props) => {
    const [userNoteTitles, setUserNoteTitles] = useState([]);
    const context = useContext(appContext);
    const { loggedInUser } = context;

    useEffect(() => {
        if (loggedInUser) {
            UserAdapter.listUserNoteTitles(loggedInUser)
                .then(titles => setUserNoteTitles(titles));
        }
    }, [loggedInUser]);

    console.log('userNoteTitles: ', userNoteTitles);
    return (
        <div id='user-note-titles'>
            <h1>User Notes</h1>
            <ul>
                <li>Dummy note</li>
            </ul>
        </div>
    );
};

UserNoteTitles.propTypes = {
    match: PropTypes.object,
};


export default UserNoteTitles;
