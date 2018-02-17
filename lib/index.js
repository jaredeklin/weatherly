import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./App');

ReactDOM.render(
  <div>App!</div>,
  document.getElementById('app')
);

module.exports = App;