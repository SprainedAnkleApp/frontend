import cx from 'classnames';

import styles from './Icon.module.css';

const Icon = ({ className, url, variant = 'm' }) => {
  return (
    <div className={cx(styles.avatar, styles[`${variant}Size`], className)}>
      <img src={url} alt="icon" className={styles.photo} />
    </div>
  );
};

export default Icon;
