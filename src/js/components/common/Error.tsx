import { GrAlert } from 'react-icons/gr';
import styles from './Error.module.css';
import React from 'react';

export type ErrorProps = {
  text: string;
};

const Error = ({ text }: ErrorProps) => {
  return (
    <p className={styles.error}>
      <GrAlert className={styles.error} /> {' ' + text}
    </p>
  );
};

export default Error;
