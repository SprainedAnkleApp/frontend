import styles from './SectionSeparator.module.css';

const SectionSeparator = ({ text }) => {
  return (
    <h2 className={styles.line}>
      <span className={styles.text}>{text}</span>
    </h2>
  );
};

export default SectionSeparator;
