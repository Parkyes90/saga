import { combineReducers } from 'redux';
import counter from './counters';
import sample from './sample';

const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
