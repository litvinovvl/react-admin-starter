import React from 'react';
import ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Main from './App';
import theme from './styles/material-ui-theme';
import './styles/index.css';

import rootSaga from './sagas/sagas';

const devTools = process.env.NODE_ENV !== 'production' && window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  devTools,
);

const initialState = {pending: true, popup: false, editing: false, users: []};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USERS':
       return Object.assign({}, state);
    case 'LOAD_USERS_FETCH':
      return Object.assign({}, state, {pending: false, users: action.payload});
    case 'REMOVE_USER':
      return Object.assign({}, state);
    case 'START_LOADING':
      return Object.assign({}, state, {pending: true});
    case 'SWITCH_POPUP':
      return Object.assign({}, state, {popup: !state.popup});
    case 'ADD_USER':
      return state;
    case 'EDIT_USER':
      return Object.assign({}, state, {editing: true});
    case 'CONFIRM_EDIT_USER_FETCH':
      let i;
      let tmp = state.users.find((user, index) => {
        i = index;
        return user.id === Number(action.payload[0])
      });
      Object.assign(tmp, action.payload[1]);
      let newUsers = state.users;
      newUsers[i] = tmp;
      return Object.assign({}, state, {editing: false, users: newUsers});
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, enhancers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
