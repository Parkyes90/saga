import React from 'react';
import Counter from '../components/Counter';
import useCounter from '../hooks/useCounter';
import useCounterActions from '../hooks/useCounterActions';

const CounterContainer: React.FC = () => {
  const number = useCounter();
  const { onDecrease, onIncrease } = useCounterActions();
  return (
    <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
  );
};

export default React.memo(CounterContainer);
