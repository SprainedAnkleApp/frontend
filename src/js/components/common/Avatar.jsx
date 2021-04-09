import cx from 'classnames';
import styles from './Avatar.module.css';

const Avatar = ({ url, variant = 'm' }) => {
  return (
    <div className={cx(styles.avatar, styles[`${variant}Size`])}>
      <img src={url} alt="avatar" className={styles.photo} />
    </div>
  );
};

export default Avatar;
