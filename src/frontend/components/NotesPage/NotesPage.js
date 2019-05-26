import React from 'react';
import PropTypes from 'prop-types';
import NotesSidebar from './NotesSidebar';

const NotesPage = (props) => {
    const { username } = props.match.params;

    return (
        <div id='notes-page'>
            <h1>Notes for { username }</h1>
            <NotesSidebar />
        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
