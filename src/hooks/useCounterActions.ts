import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { EmptyAction } from 'typesafe-actions';
import { increase, decrease, COUNTERS } from '../modules/counters';

type UseCounterActionsType = {
  onIncrease: () => EmptyAction<COUNTERS.INCREASE>;
  onDecrease: () => EmptyAction<COUNTERS.DECREASE>;
};

const useCounterActions = (): UseCounterActionsType => {
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return { onIncrease, onDecrease };
};
export default useCounterActions;
