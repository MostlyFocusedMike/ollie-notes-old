import React from 'react';
import Constants from '../../constants';

class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                <h1>Home</h1>
                <form action={`${Constants.BACKEND_URL}auth/github`} method='GET'>
                    <input type='submit' value='submit' />
                </form>
            </div>
        );
    }
}

export default Home;
