import React, { FC, ReactElement } from 'react';
import NavigationService from './routes/services/navigation';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore, { store, persistor } from './state/configureStore';

// Redux store configuration
const initialState = {};
configureStore(initialState);

// Router
import RootNavigator from './routes';

const App: FC<{}> = (): ReactElement => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </PersistGate>
  </Provider>
);

export default App;
