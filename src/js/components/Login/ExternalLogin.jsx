import { ExternalLoginButton } from '../../ui/atoms';
import { useEffect } from 'react';

const ExternalLogin = () => {
  const onGoogleClick = () => console.log('clicked google');
  const onFacebookClick = () => console.log('clicked facebook');

  useEffect(() => {
    onFacebookClick();
    onGoogleClick();
  }, []);

  return (
    <>
      <ExternalLoginButton onClick={onGoogleClick} text={'Google'} />
      <ExternalLoginButton onClick={onFacebookClick} text={'Facebook'} />
    </>
  );
};

export default ExternalLogin;
