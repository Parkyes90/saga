import React from 'react';
import Counter from '../components/Counter';
import useCounter from '../hooks/useCounter';
import useCounterActions from '../hooks/useCounterActions';

const CounterContainer: React.FC = () => {
  const number = useCounter();
  const { onIncreaseAsync, onDecreaseAsync } = useCounterActions();
  return (
    <Counter
      number={number}
      onDecrease={onDecreaseAsync}
      onIncrease={onIncreaseAsync}
    />
  );
};

export default React.memo(CounterContainer);
