import React from 'react';
import PropTypes from 'prop-types';

const NoteViewer = (props) => {
    return (
        <div id='note-viewer'>
            <h1>Main Screen</h1>
        </div>
    );
};

NoteViewer.propTypes = {
    match: PropTypes.object,
};


export default NoteViewer;
