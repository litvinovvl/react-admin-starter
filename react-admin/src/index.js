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
import reducer from './reducers/main-reducer'
import { initialState } from "./reducers/main-reducer";

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  process.env.NODE_ENV !== 'production' && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f,
);

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
