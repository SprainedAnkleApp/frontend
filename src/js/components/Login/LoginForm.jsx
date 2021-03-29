import { SubmitButton, InputWithLabel } from '../common';
import { useLocation, useHistory } from 'react-router';
import { login } from '../../API/auth/methods';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError, setSubmitError] = useState(null);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const promise = login(data.login, data.password);
    promise
      .then(() => {
        history.push(location?.state?.from || '/');
      })
      .catch(() => {
        setSubmitError('Błędny login lub hasło');
      });
  };
  const location = useLocation();
  const history = useHistory();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel
        type={'text'}
        name={'login'}
        text={'Nazwa użytkownika'}
        register={register({
          required: 'this is a required',
        })}
        error={errors.login}
      />
      {errors.login && <p>Pole wymagane</p>}

      <InputWithLabel
        type={'text'}
        name={'password'}
        text={'Hasło'}
        register={register({
          required: 'this is a required',
        })}
        error={errors.password}
      />
      {errors.password && <p>Pole wymagane</p>}

      <SubmitButton text={submitError || 'Login'} progress={submitError ? 'error' : 'success'} />
    </form>
  );
};

export default LoginForm;
