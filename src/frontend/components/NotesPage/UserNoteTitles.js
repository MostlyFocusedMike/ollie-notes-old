import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UserAdapter } from '../../adapters';
import appContext from '../../context';
import NoteTitlesHelper from './NoteTitlesHelper';

const UserNoteTitles = (props) => {
    const [userNoteTitles, setUserNoteTitles] = useState([]); // TODO figure out why this isn't set immediately as []
    const context = useContext(appContext);
    const { loggedInUser, refreshTitles } = context;

    useEffect(() => {
        if (loggedInUser) {
            UserAdapter.listUserNoteTitles(loggedInUser)
                .then(titles => setUserNoteTitles(titles));
        }
    }, [loggedInUser]);

    useEffect(() => {
        UserAdapter.listUserNoteTitles(loggedInUser)
            .then(titles => setUserNoteTitles(titles))
            .then(() => context.setRefreshTitles(false));
    }, [refreshTitles]);

    return (
        <div id='user-note-titles'>
            <h1>User Notes</h1>
            {
                userNoteTitles && userNoteTitles.length > 0 // TODO this isn't [] it's undefined
                    ? <NoteTitlesHelper userNoteTitles={ userNoteTitles } match={ props.match } />
                    : ''
            }
        </div>
    );
};

UserNoteTitles.propTypes = {
    match: PropTypes.object,
};


export default UserNoteTitles;
