import { ExternalLoginButton } from '../common';
import { FaGoogle } from 'react-icons/fa';
import { GOOGLE_AUTH_URL } from '../../API/auth/urls';
import React from 'react';

const ExternalLogin = () => {
  const googleIcon = <FaGoogle />;

  return (
    <>
      <ExternalLoginButton
        url={GOOGLE_AUTH_URL}
        text={'Kontynuuj z Google'}
        icon={googleIcon}
      />
    </>
  );
};

export default ExternalLogin;
