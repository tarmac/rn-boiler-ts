import React, { ReactElement } from 'react';

// Redux
import { Provider } from 'react-redux';
import configureStore from './state/configureStore';

// Redux store configuration
const initialState = {};
const { store } = configureStore(initialState);

// Router
import RootNavigator from './App.routes';

const App = (): ReactElement => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
