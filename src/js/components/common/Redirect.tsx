import { Link } from 'react-router-dom';
import cx from 'classnames';
import React, { HTMLProps } from 'react';

export type RedirectProps = HTMLProps<HTMLLinkElement> & {
  text: string;
  linkText: string;
};

import styles from './Redirect.module.css';
const Redirect = ({ className, text, linkText, href }: RedirectProps) => {
  if (!href) return null;

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
