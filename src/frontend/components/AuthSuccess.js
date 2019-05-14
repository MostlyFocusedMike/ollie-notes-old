import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import React, { useContext, useEffect } from 'react';
import appContext from '../context';
import { AuthAdapter } from '../adapters';

const AuthSuccess = (props) => {
    const { match: { params: { username } } } = props;
    const context = useContext(appContext);

    useEffect(() => {
        AuthAdapter.setCurrentUser(context, username);
    }, []);

    return <Redirect to={`/users/${username}`}/>;
};

AuthSuccess.propTypes = {
    match: PropTypes.object,
};

export default AuthSuccess;
