import { GrAlert } from 'react-icons/gr';
import styles from './Error.module.css';

const Error = ({ text }) => {
  return (
    <p className={styles.error}>
      <GrAlert className={styles.error} /> {' ' + text}
    </p>
  );
};

export default Error;
