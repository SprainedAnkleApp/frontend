import React from 'react';
import styles from './SelectWithLabel.module.css';
import cx from 'classnames';
import Error from './Error';
import { InputHTMLAttributes } from 'react';

type ErrorType = {
  message?: string | undefined;
};

export type Option = {
  value: string;
  label: string;
};

export type SelectWithLabelProps = InputHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: ErrorType;
  placeholder: string;
  options: Array<Option>;
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
          className={cx(styles.select, styles.selectPlaceholder)}
          ref={ref}
          id={label}
          {...props}
        >
          <option className={styles.placeholder} value="DEFAULT" disabled>
            {placeholder}
          </option>
          {options.map((option) => {
            return (
              <option
                key={option.value}
                value={option.value}
                label={option.label}
              />
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
