import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../../constants';

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
        const adapter = new UserAdapter();
        const { username } = this.props.match.params;
        adapter.getOne(username, true).then(user => this.setState({ user }, () => {
            this.setState({ loaded: true });
        }));
    }

    handleLogout = (e) => {
        e.preventDefault();
        AuthAdapter.logout()
            .then(() => {
                this.setState({
                    user: {
                        ...this.state.user,
                        isUser: false,
                    },
                });
            });
    }

    render() {
        if (this.state.loaded) {
            console.log('this.state.user: ', this.state.user);
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

export default UserProfile;
