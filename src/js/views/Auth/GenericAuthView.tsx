import React from 'react';
import styles from './GenericAuthView.module.css';
import Image from '../../../images/mountain.jpg';

export type GenericAuthViewProps = {
  redirect: React.ReactElement;
  title: string;
  children: React.ReactNode;
};

const GenericAuthView = ({
  redirect,
  title,
  children,
}: GenericAuthViewProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={Image} alt="big mountain" />
      {React.cloneElement(redirect, { className: styles.redirect })}
      <div className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default GenericAuthView;
