import React from 'react';
import PropTypes from 'prop-types';

const NotesPage = (props) => {
    const { username } = props.match.params;

    return (
        <div id='home'>
            <h1>Notes for { username }</h1>
        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
