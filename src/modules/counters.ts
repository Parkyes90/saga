import { createAction, createReducer } from 'typesafe-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

export enum COUNTERS {
  INCREASE = 'counter/INCREASE',
  DECREASE = 'counter/DECREASE',
  INCREASE_ASYNC = 'counter/INCREASE_ASYNC',
  DECREASE_ASYNC = 'counter/DECREASE_ASYNC',
}

export const increase = createAction(COUNTERS.INCREASE)();
export const decrease = createAction(COUNTERS.DECREASE)();
export const increaseAsync = createAction(
  COUNTERS.INCREASE_ASYNC,
  () => undefined,
)();
export const decreaseAsync = createAction(
  COUNTERS.DECREASE_ASYNC,
  () => undefined,
)();

function* increaseSaga(): Generator {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga(): Generator {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga(): Generator {
  yield takeEvery(COUNTERS.INCREASE_ASYNC, increaseSaga);
  yield takeLatest(COUNTERS.DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = createReducer(initialState, {
  [COUNTERS.INCREASE]: (state) => state + 1,
  [COUNTERS.DECREASE]: (state) => state - 1,
});

export default counter;
