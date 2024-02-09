import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ClassProvider } from './services/ClassService';

ReactDOM.render(
    <React.StrictMode>
    <ClassProvider>
    <App />
    </ClassProvider>
    </React.StrictMode>,
    document.getElementID('root')
    );
