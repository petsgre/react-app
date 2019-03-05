// import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';
// import App from './App';
// import Home from './Home';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './route';
// import Wel from './Wel';

ReactDOM.render(
  Routes,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
