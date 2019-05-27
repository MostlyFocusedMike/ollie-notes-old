import React from 'react';
import PropTypes from 'prop-types';

const UserNoteTitles = (props) => {
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
