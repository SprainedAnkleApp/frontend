import { SubmitButton } from '../../ui/atoms';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const onClick = () => console.log('Submit button clicked');
  return (
    <>
      <label className={styles.label} for="login">
        Nazwa użytkownika
      </label>
      <input type="text" id="login" />
      <label className={styles.label} for="password">
        Hasło
      </label>
      <input type="password" id="password" />
      <SubmitButton onClick={onClick} text={'Login'} />
    </>
  );
};

export default LoginForm;
