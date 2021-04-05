import { LoginForm, ExternalLogin, SectionSeparator } from '../../components/Login';
import { Redirect } from '../../components/common';
import GenericAuthView from './GenericAuthView';

const Login = () => {
  const redirect = (
    <Redirect href={'/signup'} text={'Nie masz konta?'} linkText={'Zarejestruj się teraz'} />
  );
  return (
    <GenericAuthView redirect={redirect} title={'Logowanie'}>
      <LoginForm />
      <SectionSeparator text={'or'} />
      <ExternalLogin />
    </GenericAuthView>
  );
};

export default Login;
