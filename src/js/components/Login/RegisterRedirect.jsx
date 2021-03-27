import { Link } from 'react-router-dom';

import styles from './RegisterRedirect.module.css';
const RegisterRedirect = () => {
  return (
    <div className={styles.text}>
      Not a member?{' '}
      <Link className={styles.link} to="/">
        Sign up now
      </Link>
    </div>
  );
};

export default RegisterRedirect;
