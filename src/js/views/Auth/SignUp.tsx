import { Redirect } from '../../components/common';
import GenericAuthView from './GenericAuthView';
import SignUpForm from '../../components/SignUp/SignUpForm';
import { isAuthenticated } from '../../API/auth/methods';
import { useHistory } from 'react-router';
import React from 'react';

const SignUp = () => {
  const history = useHistory();
  const redirect = (
    <Redirect
      href={'/login'}
      text={'Posiadasz konto?'}
      linkText={'Zaloguj się teraz'}
    />
  );
  if (isAuthenticated()) {
    history.push('/');
  }
  return (
    <GenericAuthView redirect={redirect} title={'Rejestracja'}>
      <SignUpForm />
    </GenericAuthView>
  );
};

export default SignUp;
