import cx from 'classnames';
import styles from './ExternalLoginButton.module.css';

const ExternalLoginButton = ({ className, url, text, icon }) => {
  return (
    <a className={styles.container} href={url}>
      <div className={styles.icon}>{icon}</div>
      <span className={cx(styles.button, className)}>{text}</span>
    </a>
  );
};

export default ExternalLoginButton;
