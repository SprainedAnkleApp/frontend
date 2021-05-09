import { SubmitButton, InputWithLabel, Error } from '../common';
import { useLocation, useHistory } from 'react-router';
import { login } from '../../API/auth/methods';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import React from 'react';

type FormValues = {
  login: string;
  password: string;
};

type Location = {
  from: string;
};

const LoginForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [registered, setRegistered] = useState<string | null>(null);
  const location = useLocation<Location>();
  const history = useHistory();

  useEffect(() => {
    if (location.state?.from === '/signup')
      setRegistered('Rejestracja pomyślna. Zaloguj się.');
  }, []);
  const { register, errors, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const promise = login(data);
    promise
      .then(() => {
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
        label={'Nazwa użytkownika'}
        placeholder={'Wprowadź nazwę użytkownika'}
        ref={register({
          required: 'Pole wymagane',
        })}
        error={errors.login}
      />

      <InputWithLabel
        type={'password'}
        name={'password'}
        label={'Hasło'}
        placeholder={'Wprowadź hasło'}
        ref={register({
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
