import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NotesHome from '../components/NotesPage/NotesHome';
import NoteNotFound from '../components/NotesPage/NoteNotFound';
import MainViewer from '../components/NotesPage/MainViewer';

const NoteRoutes = (props) => {
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
                component = { NotesHome }
            />
        </Switch>
    );
};


NoteRoutes.propTypes = {
    match: PropTypes.object,
};

export default NoteRoutes;
