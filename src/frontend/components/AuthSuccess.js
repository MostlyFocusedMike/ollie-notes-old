import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import appContext from '../context';

const AuthSuccess = (props) => {
    const context = useContext(appContext);

    useEffect(() => {
        localStorage.username = props.match.params.username;
        context.setCurrentUser(props.match.params.username);
    }, []); // check tutorials > tech stack > react hooks for this []
    return (
        <div>
            <p>Hello there friend</p>
        </div>
    );
};

AuthSuccess.propTypes = {
    params: PropTypes.object,
};

export default AuthSuccess;
