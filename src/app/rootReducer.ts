import { combineReducers } from '@reduxjs/toolkit';

import computedMiseReducer from 'behaviours/computeMise/computedMise.slice';

const rootReducer = combineReducers({
  computedMise: computedMiseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
