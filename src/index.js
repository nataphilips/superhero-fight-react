import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
