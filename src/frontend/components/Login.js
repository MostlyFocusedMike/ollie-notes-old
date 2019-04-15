import React from 'react';
import Constants from '../../constants';

class Login extends React.Component {
    render() {
        return (
            <div id='login'>
                <h1>Login</h1>
                <form action={`${Constants.BACKEND_URL}auth/v1/github`} method='GET'>
                    <input type='submit' value='submit' />
                </form>
            </div>
        );
    }
}

export default Login;