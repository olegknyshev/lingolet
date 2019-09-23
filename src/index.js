import React  from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';

const app = (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(app, document.getElementById('root'));