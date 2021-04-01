import styles from './InputWithLabel.module.css';
import cx from 'classnames';
import Error from './Error';

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
      {error && <Error text={error.message} />}
    </div>
  );
};

export default InputWithLabel;
