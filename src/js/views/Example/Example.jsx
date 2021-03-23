import React from 'react';
import styles from './Example.module.css';
import Counter from '../../components/Counter/Counter';

const Example = (mockProp) => {
  return (
    <div className={styles.exampleWrapper}>
      <div className={styles.header}>Example</div>
      <Counter initialCount={10} />
    </div>
  );
};

export default Example;
