import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context';
import { UserAdapter, AuthAdapter } from '../adapters';

class UserProfile extends React.Component {
    constructor() {
        super();
        this.initState = {
            user: {},
            loaded: false,
        };
        this.state = this.initState;
    }

    loadUser = (user) => {
        if (user.isUser) this.context.setCurrentUser(user);
        this.setState({
            user,
            loaded: true,
        });
    }

    componentDidMount() {
        const { username } = this.props.match.params;
        UserAdapter.getOne(username, true)
            .then((user) => { this.loadUser(user); });
    }

    handleLogout = (e) => {
        e.preventDefault();
        AuthAdapter.logout()
            .then(() => {
                console.log('logged out');
                this.setState({ user: { ...this.state.user, isUser: false } })
            })
            .then(() => { this.context.setCurrentUser(''); });
    }

    render() {
        if (this.state.loaded) {
            const {
                username,
                name,
                avatar,
                isUser,
            } = this.state.user;

            return (
                <div id='user-profile'>
                    <h1>I am the user</h1>
                    <p>this is the username {username}</p>
                    <p>this is the name {name}</p>
                    <img src={avatar} />
                    {
                        isUser
                            ? <form onSubmit={this.handleLogout}>
                                <input type='submit' value='Log Out'/>
                            </form>
                            : <p>You are not this user</p>
                    }
                </div>
            );
        }
        return <div>Loading</div>;
    }
}

UserProfile.propTypes = {
    match: PropTypes.object,
};

UserProfile.contextType = AppContext;

export default UserProfile;
