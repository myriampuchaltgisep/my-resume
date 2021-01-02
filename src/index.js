import React from "react";
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import App from './App';

// Importing Sass with Bootstrap CSS
import './App.scss';

ReactDOM.render(<App />, document.getElementById('root'));
