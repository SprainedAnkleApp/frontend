import { Link } from 'react-router-dom';

import styles from './Peak.module.css';
import { AiFillStar } from 'react-icons/ai';

const Peak = ({ peak }) => {
  return (
    <Link className={styles.card} to={`/peaks/${peak.id}`}>
      <img className={styles.photo} src={peak.photo} alt="mountain" />
      <div className={styles.peakInformation}>
        <div>
          <div className={styles.peakName}>{peak.name}</div>
          <div className={styles.peakHeight}>{peak.height} m n.p.m.</div>
        </div>
        <div className={styles.rating}>
          <AiFillStar className={styles.star} /> <p className={styles.ratingText}>4.9/5</p>
        </div>
      </div>
    </Link>
  );
};

export default Peak;
