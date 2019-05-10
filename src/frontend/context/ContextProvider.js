import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '.';

class MyProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: '',
        };
    }

    setCurrentUser = (user) => {
        this.setState({ currentUser: user });
    }

    render() {
        const context = Object.assign(
            this.state,
            {
                setCurrentUser: this.setCurrentUser,
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
