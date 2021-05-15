import cx from 'classnames';

import styles from './Card.module.css';
import React from 'react';

export type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={cx(styles.card, props.className)} ref={ref}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
