import { combineReducers } from 'redux';
import counter from './counters';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
