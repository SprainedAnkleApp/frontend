import cx from 'classnames';

import styles from './SubmitButton.module.css';
import { HTMLProps } from 'react';
import React from 'react';

export type SubmitButtonProps = HTMLProps<HTMLButtonElement> & {
  progress?: 'error' | 'default' | 'success';
  text: string;
};

const SubmitButton = ({
  progress = 'default',
  onClick,
  disabled,
  className,
  text,
}: SubmitButtonProps) => {
  const buttonStyles = cx(styles.button, styles[progress], className);

  return (
    <button
      className={buttonStyles}
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
