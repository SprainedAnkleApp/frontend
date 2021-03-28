import { SubmitButton, InputWithLabel } from '../common';

const LoginForm = () => {
  const onClick = () => console.log('Submit button clicked');
  return (
    <>
      <InputWithLabel type={'text'} id={'login'} text={'Nazwa użytkownika'} />
      <InputWithLabel type={'password'} id={'password'} text={'Hasło'} />
      <SubmitButton onClick={onClick} text={'Login'} />
    </>
  );
};

export default LoginForm;
