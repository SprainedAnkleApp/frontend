import React from "react";
import useCounter from "./useCounter";

import styles from "./Counter.module.css";

const Counter = ({ initialCount }) => {
  const { count, increment } =      useCounter(initialCount);
  
  return (
    <div>
      <div>Counter value: {count}</div>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
