import styles from './SectionSeparator.module.css';
import React from 'react';

const SectionSeparator = ({ text }: { text: string }) => {
  return (
    <h2 className={styles.line}>
      <span className={styles.text}>{text}</span>
    </h2>
  );
};

export default SectionSeparator;
