import React from 'react';
import PropTypes from 'prop-types';

import { UserAdapter } from '../adapters';

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

    render() {
        if (this.state.loaded) {
            const { username, name, avatar } = this.state.user;
            return (
                <div id='home'>
                    <h1>I am the user</h1>
                    <p>this is the username {username}</p>
                    <p>this is the name {name}</p>
                    <img src={avatar} />
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
