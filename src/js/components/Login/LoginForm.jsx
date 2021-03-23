import { SubmitButton } from '../../ui/atoms';

const LoginForm = () => {
  const onClick = () => console.log('Submit button clicked');
  return (
    <>
      <label for="login">Username</label>
      <input type="text" id="login" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <SubmitButton onClick={onClick} text={'Login'} />
    </>
  );
};

export default LoginForm;
