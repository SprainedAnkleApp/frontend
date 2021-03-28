import { SubmitButton, InputWithLabel } from '../common';
import { useLocation, useHistory } from 'react-router';

const LoginForm = () => {
  const location = useLocation();
  const history = useHistory();
  const onClick = () => {
    history.push(location?.state?.from || '/');
  };

  return (
    <>
      <InputWithLabel type={'text'} id={'login'} text={'Nazwa użytkownika'} />
      <InputWithLabel type={'password'} id={'password'} text={'Hasło'} />
      <SubmitButton onClick={onClick} text={'Login'} />
    </>
  );
};

export default LoginForm;
