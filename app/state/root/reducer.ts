import { root } from './_duck';
import * as types from './types';

// Initial State
const initialState = {};

const reducer = root.createReducer(
  {
    [types.STORE_RESET]: (state: any) => ({
      ...state,
    }),
  },
  initialState,
);

export default reducer;
