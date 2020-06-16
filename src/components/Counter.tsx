import React from 'react';

export type CounterProps = {
  onIncrease: () => void;
  onDecrease: () => void;
  number: number;
};
const Counter: React.FC<CounterProps> = ({
  onIncrease,
  onDecrease,
  number,
}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease} type="button">
        +1
      </button>
      <button onClick={onDecrease} type="button">
        -1
      </button>
    </div>
  );
};

export default Counter;
