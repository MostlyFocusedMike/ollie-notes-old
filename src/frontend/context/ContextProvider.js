import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '.';

class MyProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUser: '',
        };
    }

    setLoggedInUser = (user) => {
        this.setState({ loggedInUser: user });
    }

    render() {
        const context = Object.assign(
            this.state,
            {
                setLoggedInUser: this.setLoggedInUser,
            },
        );

        return (
            <AppContext.Provider value={ context }>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

MyProvider.propTypes = {
    children: PropTypes.object,
};


export default MyProvider;
