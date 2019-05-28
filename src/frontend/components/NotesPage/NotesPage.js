import React from 'react';
import PropTypes from 'prop-types';
import NotesSidebar from './NotesSidebar';
import NoteRoutes from '../../routes/NoteRoutes';

const NotesPage = (props) => {
    return (
        <div id='notes-page'>
            <NotesSidebar match={props.match} />
            <NoteRoutes match={props.match} />
        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
