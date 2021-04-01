import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './RegisterRedirect.module.css';
const RegisterRedirect = ({ className }) => {
  return (
    <div className={cx(styles.text, className)}>
      Nie masz konta?{' '}
      <Link className={styles.link} to="/">
        Zaloguj się teraz
      </Link>
    </div>
  );
};

export default RegisterRedirect;
