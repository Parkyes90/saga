import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { EmptyAction } from 'typesafe-actions';
import {
  increase,
  decrease,
  COUNTERS,
  increaseAsync,
  decreaseAsync,
} from '../modules/counters';

type UseCounterActionsType = {
  onIncrease: () => EmptyAction<COUNTERS.INCREASE>;
  onDecrease: () => EmptyAction<COUNTERS.DECREASE>;
  onIncreaseAsync: () => void;
  onDecreaseAsync: () => void;
};

const useCounterActions = (): UseCounterActionsType => {
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseAsync = useCallback(() => dispatch(increaseAsync()), [
    dispatch,
  ]);
  const onDecreaseAsync = useCallback(() => dispatch(decreaseAsync()), [
    dispatch,
  ]);
  return { onIncrease, onDecrease, onIncreaseAsync, onDecreaseAsync };
};
export default useCounterActions;
