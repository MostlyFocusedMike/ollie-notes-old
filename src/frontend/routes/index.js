import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Users from '../components/Users';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                component = { Home }
            />
            <Route
                exact path='/login'
                component = { Login }
            />
            <Route
                exact path='/users'
                component = { Users }
            />
            <Route
                exact path='/users/:username'
                component = { UserProfile }
            />
        </Switch>
    );
};

export default Routes;
