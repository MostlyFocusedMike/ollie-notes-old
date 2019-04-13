import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Users from '../components/Users';
import UserProfile from '../components/UserProfile';

const Routes = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                component = { Home }
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
