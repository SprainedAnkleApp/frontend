import styles from './Login.module.css';

import { LoginForm, RegisterRedirect, ExternalLogin } from '../../components/Login';

const Login = () => {
  return (
    <div className={styles.container}>
      <img src={''} alt="big login photo" />
      <div className={styles.loginSection}>
        <div>Log in</div>
        <LoginForm />
        <RegisterRedirect />
        <ExternalLogin />
      </div>
    </div>
  );
};

export default Login;
