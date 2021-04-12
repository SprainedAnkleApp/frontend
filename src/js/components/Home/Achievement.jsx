import styles from './Achievement.module.css';
import { Icon, ProgressBar } from '../common';

import cx from 'classnames';

const Achievement = ({ className, url, name, progress }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <Icon className={styles.icon} url={url} variant="l" />
      <span className={styles.name}>{name}</span>
      <ProgressBar
        className={styles.progressBar}
        backgroundColor="#7A7A7A"
        percentage={Math.round(progress * 100)}
      />
    </div>
  );
};

export default Achievement;
