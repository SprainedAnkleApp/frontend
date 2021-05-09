import { SubmitButton, InputWithLabel, Error } from '../common';
import { useHistory } from 'react-router';
import { signUp } from '../../API/auth/methods';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import React from 'react';

type FormValues = {
  login: string;
  password: string;
  repeatPassword: string;
};

const SignUpForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, errors, handleSubmit } = useForm<FormValues>();
  const history = useHistory();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const promise = signUp({
      username: data.login,
      password: data.password,
      matchingPassword: data.repeatPassword,
    });
    promise
      .then(() => {
        history.push({
          pathname: '/login',
          state: { from: '/signup' },
        });
      })
      .catch((error) => {
        setSubmitError('Wystąpił błąd');
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

      <InputWithLabel
        type={'password'}
        name={'repeatPassword'}
        label={'Powtórz hasło'}
        placeholder={'Powtórz hasło'}
        ref={register({
          required: 'Pole wymagane',
        })}
        error={errors.repeatPassword}
      />

      {submitError && <Error text={submitError} />}

      <SubmitButton text={'Zarejestruj'} progress={'success'} />
    </form>
  );
};

export default SignUpForm;
