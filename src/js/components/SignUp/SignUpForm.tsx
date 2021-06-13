import { SubmitButton, InputWithLabel, Error } from '../common';
import { useHistory } from 'react-router';
import { signUp } from '../../API/auth/methods';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState, useRef } from 'react';

type FormValues = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
};

const SignUpForm = () => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, errors, handleSubmit, watch } = useForm<FormValues>();
  const password = useRef({});
  password.current = watch('password', '');

  const history = useHistory();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const promise = signUp({
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
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
      .catch(() => {
        setSubmitError('Wystąpił błąd');
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputWithLabel
        type={'text'}
        name={'firstName'}
        label={'Imię'}
        placeholder={'Wprowadź swoje imię'}
        ref={register({
          required: 'Pole wymagane',
          maxLength: 30,
        })}
        error={errors.firstName}
      />

      <InputWithLabel
        type={'text'}
        name={'lastName'}
        label={'Nazwisko'}
        placeholder={'Wprowadź swoje nazwisko'}
        ref={register({
          required: 'Pole wymagane',
          maxLength: 30,
        })}
        error={errors.lastName}
      />

      <InputWithLabel
        type={'email'}
        name={'email'}
        label={'Email'}
        placeholder={'Wprowadź swój email'}
        ref={register({
          required: 'Pole wymagane',
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Niepoprawny email',
          },
        })}
        error={errors.email}
      />

      <InputWithLabel
        type={'text'}
        name={'username'}
        label={'Nazwa użytkownika'}
        placeholder={'Wprowadź nazwę użytkownika'}
        ref={register({
          required: 'Pole wymagane',
          maxLength: 30,
        })}
        error={errors.username}
      />

      <InputWithLabel
        type={'password'}
        name={'password'}
        label={'Hasło'}
        placeholder={'Wprowadź hasło'}
        ref={register({
          required: 'Pole wymagane',
          minLength: {
            value: 8,
            message: 'Hasło musi zawierać co najmniej 8 znaków',
          },
          pattern: {
            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
            message:
              'Hasło musi zawierać małą literę, wielką literę, znak specjalny oraz cyfrę',
          },
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
          validate: {
            repeatPassword: (value) =>
              value === password.current || 'Hasła muszą być takie same',
          },
        })}
        error={errors.repeatPassword}
      />

      {submitError && <Error text={submitError} />}

      <SubmitButton
        text={'Zarejestruj'}
        onClick={handleSubmit(onSubmit)}
        progress={'success'}
      />
    </form>
  );
};

export default SignUpForm;
