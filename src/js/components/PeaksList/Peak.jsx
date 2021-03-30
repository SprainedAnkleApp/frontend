import { Link } from 'react-router-dom';

import styles from './Peak.module.css';

const Peak = ({ peak }) => {
  // TODO change for proper address
  const id = peak._links.self.href.split('http://localhost:8080/api/peaks/')[1];
  return (
    <Link className={styles.card} to={'/peaks/'.concat(id)}>
      <img className={styles.photo} src={peak.photo} alt="mountain" />
      <div className={styles.peakName}>{peak.name}</div>
    </Link>
  );
};

export default Peak;
