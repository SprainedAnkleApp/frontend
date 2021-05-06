import styles from './PeakWarning.module.css';

const PeakWarning = ({ warningText }) => {
  return <div className={styles.warningCard}>{warningText}</div>;
};

export default PeakWarning;
