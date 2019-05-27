import React from 'react';
import PropTypes from 'prop-types';
import NotesSidebar from './NotesSidebar';
import NoteRoutes from '../../routes/NoteRoutes';

const NotesPage = (props) => {
    console.log('props.match: ', props.match);
    return (
        <div id='notes-page'>
            <NotesSidebar />
            <NoteRoutes match={props.match} />
        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
