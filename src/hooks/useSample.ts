import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { SampleStateType } from '../modules/sample';

const useSample = (): SampleStateType => {
  return useSelector((state: RootState) => state.sample);
};

export default useSample;
