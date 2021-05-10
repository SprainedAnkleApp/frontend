import { SubmitButton, InputWithLabel, Error } from '../common';
import { useHistory } from 'react-router';
import { signUp } from '../../API/auth/methods';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState, useRef } from 'react';

type FormValues = {
  login: string;
  password: string;
  repeatPassword: string;
};

const SignUpForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, errors, handleSubmit, watch } = useForm<FormValues>();
  const password = useRef({});
  password.current = watch('password', '');

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
      .catch(() => {
        setSubmitError('Wystąpił błąd');
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputWithLabel
        type={'text'}
        name={'login'}
        label={'Nazwa użytkownika'}
        placeholder={'Wprowadź nazwę użytkownika'}
        ref={register({
          required: 'Pole wymagane',
          maxLength: 30,
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
          minLength: {
            value: 8,
            message: 'Hasło musi zawierać co najmniej 8 znaków',
          },
          pattern: {
            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
            message:
              'Hasło musi zawierać wielką literę, znak specjalny oraz cyfrę',
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

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
      />
      {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
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
