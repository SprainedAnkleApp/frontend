import { SubmitButton, InputWithLabel, Error } from '../common';
import { useLocation, useHistory } from 'react-router';
import { login } from '../../API/auth/methods';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const LoginForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError, setSubmitError] = useState(null);
  const [registered, setRegistered] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state?.from === '/signup') setRegistered('Rejestracja pomyślna. Zaloguj się.');
  }, []);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const promise = login(data.login, data.password);
    promise
      .then(() => {
        console.log('hello');
        history.push(location?.state?.from || '/');
      })
      .catch(() => {
        setRegistered(null);
        setSubmitError('Błędny login lub hasło');
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel
        type={'text'}
        name={'login'}
        text={'Nazwa użytkownika'}
        placeholder={'Wprowadź nazwę użytkownika'}
        register={register({
          required: 'Pole wymagane',
        })}
        error={errors.login}
      />

      <InputWithLabel
        type={'password'}
        name={'password'}
        text={'Hasło'}
        placeholder={'Wprowadź hasło'}
        register={register({
          required: 'Pole wymagane',
        })}
        error={errors.password}
      />

      {submitError && <Error text={submitError} />}
      {registered && <p>{registered}</p>}

      <SubmitButton text={'Zaloguj'} progress={'success'} />
    </form>
  );
};

export default LoginForm;
