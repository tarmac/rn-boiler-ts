import { combineReducers, Action } from 'redux';
import * as types from './root/types';

// Definitions
import { State } from './_definitions';

// Reducers
import root from './root';

const appReducer = combineReducers({
  root,
});

const rootReducer = (state: State, action: Action) => {
  if (action.type === types.STORE_RESET) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
