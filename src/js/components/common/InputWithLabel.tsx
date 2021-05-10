import styles from './InputWithLabel.module.css';
import cx from 'classnames';
import Error from './Error';
import { InputHTMLAttributes } from 'react';
import React from 'react';

type ErrorType = {
  message?: string | undefined;
};

export type InputWithLabelProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: ErrorType;
  label: string;
  // TODO change it to the safe type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ className, label, error, ...props }: InputWithLabelProps, ref) => {
    return (
      <div className={styles.container}>
        <label className={cx(styles.label, className)} htmlFor={props.name}>
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
  }
);

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
