import React from 'react';
import './App.css';
import Routes from './routes';
import Nav from './components/Nav';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Routes />
                <h1>Hello There</h1>
            </div>
        );
    }
}

export default App;
