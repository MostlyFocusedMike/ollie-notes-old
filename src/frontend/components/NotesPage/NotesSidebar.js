import React from 'react';
import PropTypes from 'prop-types';

const NotesPage = (props) => {
    return (
        <div id='notes-sidebar'>
            <h1>NOTES SIDEBAR</h1>
        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
