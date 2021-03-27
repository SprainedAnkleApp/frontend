import styles from './Login.module.css';
import loginImage from '../../../images/loginMountain.jpg';

import { LoginForm, RegisterRedirect, ExternalLogin } from '../../components/Login';

const Login = () => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={loginImage} alt="big login" />
      <div className={styles.loginSection}>
        <h1 className={styles.title}>Logowanie</h1>
        <LoginForm />
        <RegisterRedirect />
        <ExternalLogin />
      </div>
    </div>
  );
};

export default Login;
