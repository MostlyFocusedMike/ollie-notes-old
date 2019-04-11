import React from 'react';
import './App.css';
import { UserAdapter } from './adapters';


const user = new UserAdapter();
console.log('Adapter: ', user.getOne());


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hello There</h1>
            </div>
        );
    }
}

export default App;
