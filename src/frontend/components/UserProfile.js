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

    componentDidMount() {
        const { username } = this.props.match.params;
        UserAdapter.getOne(username, true)
            .then((user) => {
                if (user.isUser) this.context.setCurrentUser(user);
                return user;
            })
            .then(user => this.setState({ user }, () => {
                this.setState({ loaded: true });
            }));
    }

    handleLogout = (e) => {
        e.preventDefault();
        AuthAdapter.logout()
            .then(() => {
                console.log('logged out');
                this.setState({
                    user: {
                        ...this.state.user,
                        isUser: false,
                    },
                });
            });
    }

    render() {
        console.log('this.context: ', this.context);
        if (this.state.loaded) {
            const { username, name, avatar } = this.state.user;
            return (
                <div id='user-profile'>
                    <h1>I am the user</h1>
                    <p>this is the username {username}</p>
                    <p>this is the name {name}</p>
                    <img src={avatar} />
                    {
                        this.state.user.isUser
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
