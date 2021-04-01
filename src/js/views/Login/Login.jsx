import styles from './Login.module.css';
import loginImage from '../../../images/loginMountain.jpg';

import {
  LoginForm,
  RegisterRedirect,
  ExternalLogin,
  SectionSeparator,
} from '../../components/Login';

const Login = () => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={loginImage} alt="big login" />
      <RegisterRedirect className={styles.redirect} />
      <div className={styles.loginSection}>
        <h1 className={styles.title}>Logowanie</h1>
        <LoginForm />
        <SectionSeparator text={'or'} />
        <ExternalLogin />
      </div>
    </div>
  );
};

export default Login;
