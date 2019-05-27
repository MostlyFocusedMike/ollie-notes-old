import React from 'react';
import PropTypes from 'prop-types';
import NotesSidebar from './NotesSidebar';
import NoteViewer from './NoteViewer';

const NotesPage = (props) => {
    const { username } = props.match.params;

    return (
        <div id='notes-page'>
            <NotesSidebar />
            <NoteViewer />
        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
