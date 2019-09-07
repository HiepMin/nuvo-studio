// core
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// components/containers
import App from './containers/App';
// libs
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// style
import GlobalStyles from './globalStyles';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
