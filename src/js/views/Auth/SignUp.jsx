import { Redirect } from '../../components/common';
import GenericAuthView from './GenericAuthView';
import SignUpForm from '../../components/SignUp/SignUpForm';

const SignUp = () => {
  const redirect = (
    <Redirect href={'/login'} text={'Posiadasz konto?'} linkText={'Zaloguj się teraz'} />
  );
  return (
    <GenericAuthView redirect={redirect} title={'Rejestracja'}>
      <SignUpForm />
    </GenericAuthView>
  );
};

export default SignUp;
