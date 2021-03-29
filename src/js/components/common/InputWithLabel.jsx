import styles from './InputWithLabel.module.css';
import cx from 'classnames';

const InputWithLabel = ({ className, text, type, name, register, error }) => {
  return (
    <div className={styles.container}>
      <label className={cx(styles.label, className)} htmlFor={name}>
        {text}
      </label>
      <input
        className={cx(styles.input, { [styles.error]: error })}
        type={type}
        name={name}
        ref={register}
      />
    </div>
  );
};

export default InputWithLabel;
