import { useSelector } from 'react-redux';
import { RootState } from '../modules';

const useCounter = (): number => {
  return useSelector((state: RootState) => state.counter);
};

export default useCounter;
