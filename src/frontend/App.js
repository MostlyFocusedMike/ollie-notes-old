import React, { useContext, useEffect } from 'react';
import './App.css';
import Routes from './routes';
import Nav from './components/Nav';
import { AuthAdapter } from './adapters';
import appContext from './context';

const App = (props) => {
    const context = useContext(appContext);
    useEffect(() => {
        AuthAdapter.checkLoggedIn(context);
    }, []);

    return (
        <div className="App">
            <Nav />
            <Routes />
            <h1>Hello There</h1>
        </div>
    );
};

export default App;
