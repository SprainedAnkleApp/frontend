import styles from './InputWithLabel.module.css';
import cx from 'classnames';
import Error from './Error';
import { InputHTMLAttributes } from 'react';
import React from 'react';

type ErrorType = {
  message: string;
};

export type InputWithLabelProps = InputHTMLAttributes<HTMLInputElement> & {
  error: ErrorType;
  register: string;
  label: string;
};

const InputWithLabel = ({
  className,
  label,
  register,
  error,
  ...props
}: InputWithLabelProps) => {
  return (
    <div className={styles.container}>
      <label className={cx(styles.label, className)} htmlFor={name}>
        {label}
      </label>
      <input
        className={cx(styles.input, { [styles.error]: error })}
        ref={register}
        {...props}
      />
      {error && <Error text={error.message} />}
    </div>
  );
};

export default InputWithLabel;
