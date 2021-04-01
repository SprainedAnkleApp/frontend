import styles from './Login.module.css';
import loginImage from '../../../images/loginMountain.jpg';

import { LoginForm, ExternalLogin, SectionSeparator } from '../../components/Login';
import { Redirect } from '../../components/common';

const Login = () => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={loginImage} alt="big login" />
      <Redirect
        className={styles.redirect}
        href={'/signup'}
        text={'Nie masz konta?'}
        linkText={'Zaloguj się teraz'}
      />
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
