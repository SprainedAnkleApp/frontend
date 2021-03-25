import { Link } from 'react-router-dom';

import styles from './Peak.module.css';

const Peak = ({ peakName, height, region, about, mountainRange, photo, link }) => {
  return (
    <div className={styles.card}>
      {/* TODO - change /exampleRoute to one peak's view */}
      <Link className={styles.showMoreButton} to="/exampleRoute" />
      <img className={styles.photo} src={photo} alt="mountain" />
      <div>
        <h1>{peakName}</h1>
      </div>
    </div>
  );
};

export default Peak;
