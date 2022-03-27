import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomepageProvider from './context/context';
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  <HomepageProvider>
    <Router>
        <App />
    </Router>
  </HomepageProvider>,
  document.getElementById('root')
);
