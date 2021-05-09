import { Link } from 'react-router-dom';

import styles from './Peak.module.css';
import { Peak } from '../../models/interfaces';
import React from 'react';

const Peak = ({ peak }: { peak: Peak }) => {
  return (
    <Link className={styles.card} to={`/peaks/${peak.id}`}>
      <img className={styles.photo} src={peak.photo} alt="mountain" />
      <div className={styles.peakName}>{peak.name}</div>
    </Link>
  );
};

export default Peak;
