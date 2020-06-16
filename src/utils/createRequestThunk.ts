/* eslint-disable */
import { finishLoading, startLoading } from '../modules/loading';

const createRequestThunk = (type: string, request: any): any => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params: any) => async (dispatch: any): Promise<void> => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      throw e;
    } finally {
      dispatch(finishLoading(type));
    }
  };
};

export default createRequestThunk;
