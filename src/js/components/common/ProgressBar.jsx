import styles from './ProgressBar.module.css';

import cx from 'classnames';

const ProgressBar = ({ className, backgroundColor, percentage, completed }) => {
  const containerStyles = {
    border: `2px solid ${backgroundColor}`,
  };
  const fillerStyles = {
    width: `${completed ? 100 : percentage}%`,
    backgroundColor: backgroundColor,
  };

  return (
    <div className={cx(styles.wrapper, className)} style={containerStyles}>
      <div className={styles.filler} style={fillerStyles}></div>
      <span className={styles.label}>{completed ? 'Ukończone' : `${percentage}%`}</span>
    </div>
  );
};

export default ProgressBar;
