import { LoginForm, ExternalLogin, SectionSeparator } from '../../components/Login';
import { Redirect } from '../../components/common';
import GenericAuthView from './GenericAuthView';
import { isAuthenticated } from '../../API/auth/methods';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const redirect = (
    <Redirect href={'/signup'} text={'Nie masz konta?'} linkText={'Zarejestruj się teraz'} />
  );
  if (isAuthenticated()) {
    history.push('/');
  }
  return (
    <GenericAuthView redirect={redirect} title={'Logowanie'}>
      <LoginForm />
      <SectionSeparator text={'or'} />
      <ExternalLogin />
    </GenericAuthView>
  );
};

export default Login;
