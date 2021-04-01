import styles from './SingUp.module.css';
import { Redirect } from '../../components/common';
import SignUpImage from '../../../images/loginMountain.jpg';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={SignUpImage} alt="big register" />
      <Redirect className={styles.redirect} />
    </div>
  );
};

export default SignUp;
