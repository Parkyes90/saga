import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counters';
import sample, { sampleSaga } from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga(): Generator {
  yield all([counterSaga(), sampleSaga()]);
}
