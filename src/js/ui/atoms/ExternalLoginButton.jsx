import cx from 'classnames';
import styles from './ExternalLoginButton.module.css';

const ExternalLoginButton = ({ className, onClick, disabled, text, icon }) => {
  const buttonStyles = cx(styles.button, className);
  console.log(text, onClick);

  return (
    <button className={buttonStyles} type="submit" onClick={onClick} disabled={disabled}>
      <img src={icon} alt="icon" />
      {text}
    </button>
  );
};

export default ExternalLoginButton;
