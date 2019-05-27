import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotesSidebar from './NotesSidebar';
import NewNote from './NewNote';
import MDInput from './MDInput';
// import NoteRoutes from '../../routes/NoteRoutes';

const NotesPage = (props) => {
    console.log('props.match: ', props.match);
    return (
        <div id='notes-page'>
            <NotesSidebar />
            {/* <NoteRoutes /> */}
            <Switch>
                <Route
                    path={`${props.match.path}/:noteId`}
                    component = { MDInput }
                />
                <Route
                    path={`${props.match.path}`}
                    component = { NewNote }
                />
            </Switch>

        </div>
    );
};

NotesPage.propTypes = {
    match: PropTypes.object,
};


export default NotesPage;
