import {
  LoginForm,
  ExternalLogin,
  SectionSeparator,
} from '../../components/Login';
import { Redirect } from '../../components/common';
import GenericAuthView from './GenericAuthView';
import React from 'react';

const Login = () => {
  const redirect = (
    <Redirect
      href={'/signup'}
      text={'Nie masz konta?'}
      linkText={'Zarejestruj się teraz'}
    />
  );
  return (
    <GenericAuthView redirect={redirect} title={'Logowanie'}>
      <LoginForm />
      <SectionSeparator text={'lub'} />
      <ExternalLogin />
    </GenericAuthView>
  );
};

export default Login;
