import React from 'react';
import { UserAdapter } from '../adapters';

class Users extends React.Component {
    constructor() {
        super();
        this.initState = {
            users: [],
        };
        this.state = this.initState;
    }

    componentDidMount() {
        const adapter = new UserAdapter();
        adapter.list().then(users => this.setState({ users }, () => console.log('users: ', this.state.users)));
    }

    render() {
        return (
            <div id='users-list'>
                <h1>users</h1>
                {
                    this.state.users.map((user) => {
                        return <p key={ user.username }>{ user.username }</p>;
                    })
                }
            </div>
        );
    }
}

export default Users;
