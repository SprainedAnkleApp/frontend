import cx from 'classnames';

import styles from './Card.module.css';

const Card = ({ className, children }) => {
  return <div className={cx(styles.card, className)}>{children}</div>;
};

export default Card;
