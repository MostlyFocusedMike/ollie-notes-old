import React from 'react';
import Constants from '../../constants';

// this can't use a fetch adapter yet since there are issues with GitHub and CORS
// so we manually visit the serer page and then use hapi to redirect back to the front
const Login = () => {
    return (
        <div id='login'>
            <h1>Login</h1>
            <form
                action={`${Constants.BACKEND_URL}/auth/v1/github`}
                method='GET'
            >
                <input type='submit' value='submit' />
            </form>
        </div>
    );
};

export default Login;
