import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './Redirect.module.css';
const Redirect = ({ className, text, linkText, href }) => {
  return (
    <div className={cx(styles.text, className)}>
      {text}{' '}
      <Link className={styles.link} to={href}>
        {linkText}
      </Link>
    </div>
  );
};

export default Redirect;
