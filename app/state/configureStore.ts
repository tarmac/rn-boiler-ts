import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Reducers & Sagas
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Definitions
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Initializations
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({
  collapsed: true,
});

export default function configureStore(initialState = {}) {
  let store;
  const middlewares = [];

  if (__DEV__) {
    middlewares.push(logger);
  }

  middlewares.push(sagaMiddleware);

  store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return { store };
}
