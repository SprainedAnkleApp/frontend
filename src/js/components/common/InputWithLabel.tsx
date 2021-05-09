import styles from './InputWithLabel.module.css';
import cx from 'classnames';
import Error from './Error';
import { InputHTMLAttributes, RefObject } from 'react';
import React from 'react';

type ErrorType = {
  message?: string | undefined;
};

export type InputWithLabelProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: ErrorType;
  label: string;
  // TODO change it to the safe type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
};

const InputWithLabel = ({
  className,
  label,
  error,
  ref,
  ...props
}: InputWithLabelProps) => {
  return (
    <div className={styles.container}>
      <label className={cx(styles.label, className)} htmlFor={name}>
        {label}
      </label>
      <input
        className={cx(styles.input, { [styles.error]: error })}
        ref={ref}
        {...props}
      />
      {error && error.message && <Error text={error.message} />}
    </div>
  );
};

export default InputWithLabel;
