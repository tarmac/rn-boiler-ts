import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from '@react-native-community/async-storage';

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
let store: Store;
let persistor: Persistor;
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({
  collapsed: true,
});

// By default, all store is saved in async storage.
const persistConfig = {
  key: 'root',
  storage,
};

export default function configureStore(initialState = {}): void {
  const middlewares = [];
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  if (__DEV__) {
    middlewares.push(logger);
  }

  middlewares.push(sagaMiddleware);

  store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
}

export { store, persistor };
