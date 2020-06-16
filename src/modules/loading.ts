import { createAction, createReducer } from 'typesafe-actions';

enum LOADING {
  START_LOADING = 'loading/START_LOADING',
  FINISH_LOADING = 'loading/FINISH_LOADING',
}

export const startLoading = createAction(LOADING.START_LOADING)<string>();
export const finishLoading = createAction(LOADING.FINISH_LOADING)<string>();

export type LoadingStateType = {
  [type: string]: boolean;
};
const initialState = {};

const loading = createReducer<LoadingStateType>(initialState, {
  [LOADING.START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [LOADING.FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});

export default loading;
