import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '.';

class MyProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUser: '',
            refreshTitles: false,
        };
    }

    setLoggedInUser = (user) => {
        this.setState({ loggedInUser: user });
    }

    setRefreshTitles = (isRefresh) => {
        this.setState({ refreshTitles: isRefresh });
    }

    render() {
        const context = Object.assign(
            this.state,
            {
                setLoggedInUser: this.setLoggedInUser,
                setRefreshTitles: this.setRefreshTitles,
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
