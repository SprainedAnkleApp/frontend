import { Redirect } from '../../components/common';
import GenericAuthView from './GenericAuthView';
import SignUpForm from '../../components/SignUp/SignUpForm';
import { isAuthenticated } from '../../API/auth/methods';

const SignUp = () => {
  const redirect = (
    <Redirect href={'/login'} text={'Posiadasz konto?'} linkText={'Zaloguj się teraz'} />
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
    <GenericAuthView redirect={redirect} title={'Rejestracja'}>
      <SignUpForm />
    </GenericAuthView>
  );
};

export default SignUp;
