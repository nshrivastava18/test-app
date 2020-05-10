import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configurationStore from './store/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <App store={configurationStore()}/>
  </React.StrictMode>,
  document.getElementById('root')
);


