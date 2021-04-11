import cx from 'classnames';

import styles from './Icon.module.css';

const Icon = ({ url, variant = 'm' }) => {
  return (
    <div className={cx(styles.avatar, styles[`${variant}Size`])}>
      <img src={url} alt="icon" className={styles.photo} />
    </div>
  );
};

export default Icon;
