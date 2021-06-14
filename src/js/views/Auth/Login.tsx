import {
  LoginForm,
  ExternalLogin,
  SectionSeparator,
} from '../../components/Login';
import { Redirect } from '../../components/common';
import GenericAuthView from './GenericAuthView';
import { isAuthenticated } from '../../API/auth/methods';
import { useHistory } from 'react-router-dom';
import React from 'react';
import useOAUTHChecker from '../../hooks/useOAUTHChecker';

const Login = () => {
  useOAUTHChecker();
  const history = useHistory();
  const redirect = (
    <Redirect
      href={'/signup'}
      text={'Nie masz konta?'}
      linkText={'Zarejestruj się teraz'}
    />
  );
  if (isAuthenticated()) {
    history.push('/');
  }
  return (
    <GenericAuthView redirect={redirect} title={'Logowanie'}>
      <LoginForm />
      <SectionSeparator text={'lub'} />
      <ExternalLogin />
    </GenericAuthView>
  );
};

export default Login;
