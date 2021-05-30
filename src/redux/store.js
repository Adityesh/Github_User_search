import {createStore, applyMiddleware, compose} from 'redux';
import sagaMiddleWare from 'redux-saga';
import rootReducer from './reducer.js';
import rootSaga from './saga.js';

const newMiddleWare = sagaMiddleWare();

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(newMiddleWare))
);

newMiddleWare.run(rootSaga);

export default store;