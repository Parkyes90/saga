import { createReducer } from 'typesafe-actions';
import * as api from '../utils/api';
import { PostType, UserType } from '../utils/api';
import createRequestThunk from '../utils/createRequestThunk';

export enum SAMPLE {
  GET_POST = 'sample/GET_POST',
  GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS',
  GET_POST_FAILURE = 'sample/GET_POST_FAILURE',
  GET_USERS = 'sample/GET_USERS',
  GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE',
}

export const getPost = createRequestThunk(SAMPLE.GET_POST, api.getPost);

export const getUsers = createRequestThunk(SAMPLE.GET_USERS, api.getUsers);

export type SampleStateType = {
  post: PostType | null;
  users: UserType[] | null;
};

const initialState = {
  post: null,
  users: null,
};

const sample = createReducer(initialState, {
  [SAMPLE.GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    post: action.payload,
  }),
  [SAMPLE.GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: action.payload,
  }),
});

export default sample;
