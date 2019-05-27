import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Users from '../components/Users';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';
import NotesPage from '../components/NotesPage/NotesPage';
import AuthSuccess from '../components/AuthSuccess';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                component = { Home }
            />
            <Route
                path='/login'
                component = { Login }
            />
            <Route
                path='/auth-success/:username'
                component = { AuthSuccess }
            />
            <Route
                path='/users/:username/notes'
                component = { NotesPage }
            />
            <Route
                exact path='/users/:username'
                component = { UserProfile }
            />
            <Route
                exact path='/users'
                component = { Users }
            />
        </Switch>
    );
};

export default Routes;
