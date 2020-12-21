import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { State } from 'types';

const initialState: State = {
  selectedBalls: [],
  selectedStars: [],
  mise: 0,
};

const computeMise = (
  selectedBalls: number[],
  selectedStars: number[],
  multiples: any
): number => {
  const misePattern = multiples?.find(
    (cota: any) =>
      selectedBalls.length === cota.pattern[0] &&
      selectedStars.length === cota.pattern[1]
  );
  if (misePattern) {
    return misePattern.cost.value / 100;
  }

  return 0;
};

const handleSlected = (state: any) => {
  const {
    selectedBalls,
    selectedStars,
    cota: { multiples },
  } = state;
  return computeMise(selectedBalls, selectedStars, multiples);
};

const computedMiseSlice = createSlice({
  name: 'computedMise',
  initialState,
  reducers: {
    selectBallAction(state, action: PayloadAction<number>) {
      state.selectedBalls.push(action.payload);
    },
    deselectBallAction(state, action: PayloadAction<number>) {
      const selectedBallsAfterDeselect = state.selectedBalls.filter(
        (ball: number) => ball !== action.payload
      );
      state.selectedBalls = selectedBallsAfterDeselect;
    },
    selectStarAction(state, action: PayloadAction<number>) {
      state.selectedStars.push(action.payload);
    },
    deselectStarAction(state, action: PayloadAction<number>) {
      const selectedStartAfterDeselect = state.selectedStars.filter(
        (ball: number) => ball !== action.payload
      );
      state.selectedStars = selectedStartAfterDeselect;
    },
  },
});

export const selectMise = createSelector(
  (state: any) => state,
  ({ computedMise, gameCotas }) => {
    return handleSlected({ ...computedMise, ...gameCotas });
  }
);

export const {
  selectBallAction,
  deselectBallAction,
  selectStarAction,
  deselectStarAction,
} = computedMiseSlice.actions;

export default computedMiseSlice.reducer;
