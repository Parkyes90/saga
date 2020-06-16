import { createAction, createReducer } from 'typesafe-actions';

export enum COUNTERS {
  INCREASE = 'counter/INCREASE',
  DECREASE = 'counter/DECREASE',
}

export const increase = createAction(COUNTERS.INCREASE)();
export const decrease = createAction(COUNTERS.DECREASE)();

const initialState = 0;

const counter = createReducer(initialState, {
  [COUNTERS.INCREASE]: (state) => state + 1,
  [COUNTERS.DECREASE]: (state) => state - 1,
});

export default counter;
