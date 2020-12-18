import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import cotas from './cotas.fake.json';
import { State } from 'types';

const initialState: State = {
  cota: cotas,
  selectedBalls: [],
  selectedStars: [],
  mise: 0,
};

const computeMise = (
  selectedBalls: number[],
  selectedStars: number[],
  multiples: any
): number => {
  const misePattern = multiples.find(
    (cota: any) =>
      selectedBalls.length === cota.pattern[0] &&
      selectedStars.length === cota.pattern[1]
  );
  if (misePattern) {
    return misePattern.cost.value / 100;
  }

  return 0;
};

const handleSlected = (state: WritableDraft<State>) => {
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
    changeCotaAction(state, action: PayloadAction<any>) {
      state.cota = action.payload;
    },
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

export const selectMise: any = createSelector(
  (state: any) => state.computedMise,
  (computedMise) => handleSlected(computedMise)
);

export const {
  changeCotaAction,
  selectBallAction,
  deselectBallAction,
  selectStarAction,
  deselectStarAction,
} = computedMiseSlice.actions;

export default computedMiseSlice.reducer;
