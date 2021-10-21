// imports
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

// linking reducers and thunk
const store = createStore(reducers, applyMiddleware(thunk));

// rendering to the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
