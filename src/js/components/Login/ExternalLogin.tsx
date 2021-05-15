import { ExternalLoginButton } from '../common';
import { FaGoogle, FaFacebookSquare } from 'react-icons/fa';
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL } from '../../API/auth/urls';
import React from 'react';

const ExternalLogin = () => {
  const googleIcon = <FaGoogle />;
  const fbIcon = <FaFacebookSquare />;

  return (
    <>
      <ExternalLoginButton
        url={GOOGLE_AUTH_URL}
        text={'Kontynuuj z Google'}
        icon={googleIcon}
      />
      <ExternalLoginButton
        url={FACEBOOK_AUTH_URL}
        text={'Kontynuuj z Facebook'}
        icon={fbIcon}
      />
    </>
  );
};

export default ExternalLogin;
