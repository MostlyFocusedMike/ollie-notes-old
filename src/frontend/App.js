import React from 'react';
import './App.css';
import Routes from './routes';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Routes />
                <h1>Hello There</h1>
            </div>
        );
    }
}

export default App;
