import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { startLoading, finishLoading } from '../modules/loading';

type ResponseType<T> = {
  data: T;
};

const createRequestSaga = <T, P>(
  type: string,
  request: (args: P) => Promise<T>,
): ((action: AnyAction) => Generator) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* requestSaga(action: AnyAction): Generator {
    yield put(startLoading(type));
    try {
      const response = (yield call(request, action.payload)) as ResponseType<T>;
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
};

export default createRequestSaga;
