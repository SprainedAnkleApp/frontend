import { useState } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount ?? 0);

  return {
    count,
    increment: () => setCount((count) => count + 1),
    decrement: () => setCount((count) => count - 1),
  };
};

export default useCounter;
