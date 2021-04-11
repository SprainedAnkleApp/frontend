import { LoginForm, ExternalLogin, SectionSeparator } from '../../components/Login';
import { Redirect as RedirectButton } from '../../components/common';
import GenericAuthView from './GenericAuthView';
import { isAuthenticated } from '../../API/auth/methods';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const redirect = (
    <RedirectButton href={'/signup'} text={'Nie masz konta?'} linkText={'Zarejestruj się teraz'} />
  );
  if (isAuthenticated()) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
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
