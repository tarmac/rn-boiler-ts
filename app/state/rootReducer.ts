import { combineReducers } from 'redux';
import * as types from './root/types';
import { Action } from './root/_interfaces';

// Reducers
import root from './root';

const appReducer = combineReducers({
  root,
});

const rootReducer = (state: any, action: Action) => {
  if (action.type === types.STORE_RESET) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
