import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetch from 'isomorphic-fetch';

export const IDLE = 'IDLE';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

const initialState: { loading: string; cota: any } = {
  cota: {},
  loading: IDLE,
};

// First, create the thunk
export const fetchCota: any = createAsyncThunk('cota', async () => {
  const result = await fetch(
    'https://fdj-euromillion.herokuapp.com/rest/euromillions'
  );
  const data = await result.json();

  return data;
});

const gameCotasSlice = createSlice({
  name: 'gameCotas',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCota.fulfilled]: (state, action) => {
      state.loading = SUCCESS;
      state.cota = action.payload;
    },
    [fetchCota.pending]: (state) => {
      state.loading = PENDING;
    },
    [fetchCota.rejected]: (state) => {
      state.loading = ERROR;
    },
  },
});

export default gameCotasSlice.reducer;
