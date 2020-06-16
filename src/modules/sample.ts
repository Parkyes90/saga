import { createReducer } from 'typesafe-actions';
import { Dispatch } from 'redux';
import * as api from '../utils/api';
import { PostType, UserType } from '../utils/api';

enum SAMPLE {
  GET_POST = 'sample/GET_POST',
  GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS',
  GET_POST_FAILURE = 'sample/GET_POST_FAILURE',
  GET_USERS = 'sample/GET_USERS',
  GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE',
}

export const getPost = (id: number) => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch({ type: SAMPLE.GET_POST });
  try {
    const response = await api.getPost(id);
    dispatch({ type: SAMPLE.GET_POST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: SAMPLE.GET_POST_FAILURE, payload: e, error: true });
    throw e;
  }
};

export const getUsers = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch({ type: SAMPLE.GET_USERS });
  try {
    const response = await api.getUsers();
    dispatch({ type: SAMPLE.GET_USERS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: SAMPLE.GET_USERS_FAILURE, payload: e, error: true });
    throw e;
  }
};

export type SampleStateType = {
  loading: {
    GET_POST: boolean;
    GET_USERS: boolean;
  };
  post: PostType | null;
  users: UserType[] | null;
};

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = createReducer(initialState, {
  [SAMPLE.GET_POST]: (state) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: true,
    },
  }),
  [SAMPLE.GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false,
    },
    post: action.payload,
  }),
  [SAMPLE.GET_POST_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false,
    },
  }),
  [SAMPLE.GET_USERS]: (state) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: true,
    },
  }),
  [SAMPLE.GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false,
    },
    users: action.payload,
  }),
  [SAMPLE.GET_USERS_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false,
    },
  }),
});

export default sample;
