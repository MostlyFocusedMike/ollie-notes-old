import React from 'react';
import './App.css';
import { UserAdapter } from './adapters';
import Routes from './routes';


const user = new UserAdapter();
console.log('Adapter: ', user.getOne('fake_1'));


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
