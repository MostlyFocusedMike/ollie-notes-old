import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './frontend/index.css';
import App from './frontend/App';
import MyProvider from './frontend/context/ContextProvider';

ReactDOM.render(
    <BrowserRouter>
        <MyProvider>
            <App />
        </MyProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
