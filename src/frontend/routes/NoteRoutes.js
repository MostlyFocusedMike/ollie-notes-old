import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NewNote from '../components/NotesPage/NewNote';
import NoteNotFound from '../components/NotesPage/NoteNotFound';
import MainViewer from '../components/NotesPage/MainViewer';

const NoteRoutes = (props) => {
    console.log('props routes: ', props);
    return (
        <Switch>
            <Route
                path={`${props.match.path}/not-found`}
                component = { NoteNotFound }
            />
            <Route
                path={`${props.match.path}/:noteId`}
                component = { MainViewer }
            />
            <Route
                path={`${props.match.path}`}
                component = { NewNote }
            />
        </Switch>
    );
};


NoteRoutes.propTypes = {
    match: PropTypes.object,
};

export default NoteRoutes;
