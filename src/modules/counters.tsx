import { createAction, createReducer } from 'typesafe-actions';
import { Dispatch } from 'redux';

export enum COUNTERS {
  INCREASE = 'counter/INCREASE',
  DECREASE = 'counter/DECREASE',
}

export const increase = createAction(COUNTERS.INCREASE)();
export const decrease = createAction(COUNTERS.DECREASE)();

export const increaseAsync = () => (dispatch: Dispatch): void => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch: Dispatch): void => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;

const counter = createReducer(initialState, {
  [COUNTERS.INCREASE]: (state) => state + 1,
  [COUNTERS.DECREASE]: (state) => state - 1,
});

export default counter;
