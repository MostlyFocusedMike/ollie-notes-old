import React from 'react';
import PropTypes from 'prop-types';
import NewNote from './NewNote';
import MDInput from './MDInput';

const NoteViewer = (props) => {
    return (
        <div id='note-viewer'>
            <h1>Main Screen</h1>
            <NewNote />
            <MDInput />
        </div>
    );
};

NoteViewer.propTypes = {
    match: PropTypes.object,
};


export default NoteViewer;
