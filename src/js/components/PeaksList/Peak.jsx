import { Link } from 'react-router-dom';

import styles from './Peak.module.css';

const Peak = ({ peak }) => {
  return (
    <div className={styles.card}>
      {/* TODO - change /exampleRoute to one peak's view */}
      <Link className={styles.showMoreButton} to="/exampleRoute" />
      <img className={styles.photo} src={peak.photo} alt="mountain" />
      <div className={styles.peakName}>{peak.name}</div>
    </div>
  );
};

export default Peak;
