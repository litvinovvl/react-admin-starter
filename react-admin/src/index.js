import React from 'react';
import ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import Test from './App';
import theme from './styles/material-ui-theme';
import './styles/index.css';

import loadUsersSaga from './sagas/sagas';

const devTools = process.env.NODE_ENV !== 'production' && window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  devTools,
);

const initialState = {pending: true, users: []};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USERS':
       return Object.assign({}, state);
    case 'LOAD_USERS_FETCH':
      return Object.assign({}, state, {pending: false, users: action.payload});
    default: return state;
  }
};

const store = createStore(reducer, initialState, enhancers);

sagaMiddleware.run(loadUsersSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Test />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
