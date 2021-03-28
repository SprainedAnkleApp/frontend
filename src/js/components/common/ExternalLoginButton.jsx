import cx from 'classnames';
import styles from './ExternalLoginButton.module.css';

const ExternalLoginButton = ({ className, onClick, disabled, text, icon }) => {
  const buttonStyles = cx(styles.button, className);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <button className={buttonStyles} type="submit" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default ExternalLoginButton;
