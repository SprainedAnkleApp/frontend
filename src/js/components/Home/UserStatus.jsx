import styles from './UserStatus.module.css';
import cx from 'classnames';

const UserStatus = ({ status, className }) => {
  const isOnline = status === 'online';
  return <>{isOnline && <span className={cx(styles.online, className)}>●</span>}</>;
};
export default UserStatus;
