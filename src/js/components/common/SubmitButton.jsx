import cx from 'classnames';

import styles from './SubmitButton.module.css';

const SubmitButton = ({ progress, onClick, disabled, className, text }) => {
  const buttonStyles = cx(styles.button, styles[progress], className);

  return (
    <button className={buttonStyles} type="submit" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default SubmitButton;
