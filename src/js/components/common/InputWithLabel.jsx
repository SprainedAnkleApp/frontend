import styles from './InputWithLabel.module.css';
import cx from 'classnames';

const InputWithLabel = ({ className, text, type, id }) => {
  return (
    <div className={styles.container}>
      <label className={cx(styles.label, className)} for={id}>
        {text}
      </label>
      <input className={styles.input} type={type} id={id} />
    </div>
  );
};

export default InputWithLabel;
