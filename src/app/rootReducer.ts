import { combineReducers } from '@reduxjs/toolkit';

import computedMiseReducer from 'behaviours/computeMise/computedMise.slice';
import gameCotasReducer from 'behaviours/gameCotas/gameCotas.slice';

const rootReducer = combineReducers({
  computedMise: computedMiseReducer,
  gameCotas: gameCotasReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
