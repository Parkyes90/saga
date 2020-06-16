import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { LoadingStateType } from '../modules/loading';

const useLoading = (): LoadingStateType => {
  return useSelector((state: RootState) => state.loading);
};

export default useLoading;
