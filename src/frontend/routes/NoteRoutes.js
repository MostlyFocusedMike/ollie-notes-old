import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NewNote from '../components/NotesPage/NewNote';
import MDInput from '../components/NotesPage/MDInput';

const NoteRoutes = (props) => {
    console.log('props routes: ', props);
    return (
        <Switch>
            <Route
                path='users/:username/notes/ok'
                component = { MDInput }
            />
            <Route
                path='/users/:username/notes'
                component = { NewNote }
            />
        </Switch>
    );
};


NoteRoutes.propTypes = {
    match: PropTypes.object,
};

export default NoteRoutes;
