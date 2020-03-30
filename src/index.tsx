import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
/** Redux imports **/
import { createStore } from 'redux';
// import { data } from './reducers/data';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(data, composeWithDevTools());
import { Router } from 'react-router-dom';
import history from './history';

ReactDOM.render(
  // <Provider store={store}>
  <Router history={history}>
    <App />
  </Router>,
  // </Provider>,
  document.getElementById('root')
);

// module.hot.accept();
