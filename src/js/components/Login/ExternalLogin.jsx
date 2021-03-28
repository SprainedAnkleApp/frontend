import { ExternalLoginButton } from '../common';
import { useEffect } from 'react';
import { FaGoogle, FaFacebookSquare } from 'react-icons/fa';

const ExternalLogin = () => {
  const onGoogleClick = () => console.log('clicked google');
  const onFacebookClick = () => console.log('clicked facebook');

  useEffect(() => {
    onFacebookClick();
    onGoogleClick();
  }, []);

  const googleIcon = <FaGoogle />;
  const fbIcon = <FaFacebookSquare />;

  return (
    <>
      <ExternalLoginButton onClick={onGoogleClick} text={'Kontynuuj z Google'} icon={googleIcon} />
      <ExternalLoginButton onClick={onFacebookClick} text={'Kontynuuj z Facebook'} icon={fbIcon} />
    </>
  );
};

export default ExternalLogin;
