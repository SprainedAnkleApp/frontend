import React from 'react';
import styles from './SelectWithLabel.module.css';
import cx from 'classnames';
import Error from './Error';
import { InputHTMLAttributes } from 'react';

type ErrorType = {
  message?: string | undefined;
};

export type SelectWithLabelProps = InputHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: ErrorType;
  placeholder: string;
  options: Array<string>;
};

const SelectWithLabel = React.forwardRef<
  HTMLSelectElement,
  SelectWithLabelProps
>(
  (
    {
      className,
      label,
      placeholder,
      options,
      error,
      ...props
    }: SelectWithLabelProps,
    ref
  ) => {
    return (
      <div className={styles.container}>
        <label className={cx(styles.label, className)} htmlFor={props.name}>
          {label}
        </label>
        <select
          defaultValue={'DEFAULT'}
          className={styles.select}
          ref={ref}
          id={label}
          {...props}
        >
          <option className={styles.placeholder} value="DEFAULT" disabled>
            {placeholder}
          </option>
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        {error && error.message && <Error text={error.message} />}
      </div>
    );
  }
);

SelectWithLabel.displayName = 'SelectWithLabel';

export default SelectWithLabel;
