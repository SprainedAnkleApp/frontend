import { Link } from 'react-router-dom';

import styles from './Peak.module.css';

const Peak = ({ peak }) => {
  return (
    <Link className={styles.card} to="/exampleRoute">
      {/* TODO - change /exampleRoute to one peak's view */}
      <img className={styles.photo} src={peak.photo} alt="mountain" />
      <div className={styles.peakName}>{peak.name}</div>
    </Link>
  );
};

export default Peak;
