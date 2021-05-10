import styles from './PeakWarning.module.css';
import React from 'react';

const PeakWarning = ({ warningText }: { warningText: string }) => {
  return <div className={styles.warningCard}>{warningText}</div>;
};

export default PeakWarning;
