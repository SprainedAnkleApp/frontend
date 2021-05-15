import { SubmitButton, InputWithLabel, Error } from '../common';
import { useHistory } from 'react-router';
import { signUp } from '../../API/auth/methods';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';

const SignUpForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError, setSubmitError] = useState(null);
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch('password', '');

  const history = useHistory();

  const onSubmit = (data) => {
    const promise = signUp({
      username: data.login,
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
      .catch((error) => {
        setSubmitError('Wystąpił błąd');
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputWithLabel
        type={'text'}
        name={'firstName'}
        text={'Imię'}
        placeholder={'Wprowadź swoje imię'}
        register={register({
          required: 'Pole wymagane',
          maxLength: 30,
        })}
        error={errors.firstName}
      />

      <InputWithLabel
        type={'text'}
        name={'lastName'}
        text={'Nazwisko'}
        placeholder={'Wprowadź swoje nazwisko'}
        register={register({
          required: 'Pole wymagane',
          maxLength: 30,
        })}
        error={errors.lastName}
      />

      <InputWithLabel
        type={'email'}
        name={'email'}
        text={'Email'}
        placeholder={'Wprowadź swój email'}
        register={register({
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
        name={'login'}
        text={'Nazwa użytkownika'}
        placeholder={'Wprowadź nazwę użytkownika'}
        register={register({
          required: 'Pole wymagane',
          maxLength: 30,
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
          minLength: {
            value: 8,
            message: 'Hasło musi zawierać co najmniej 8 znaków',
          },
          pattern: {
            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
            message: 'Hasło musi zawierać wielką literę, znak specjalny oraz cyfrę',
          },
        })}
        error={errors.password}
      />

      <InputWithLabel
        type={'password'}
        name={'repeatPassword'}
        text={'Powtórz hasło'}
        placeholder={'Powtórz hasło'}
        register={register({
          required: 'Pole wymagane',
          validate: {
            repeatPassword: (value) => value === password.current || 'Hasła muszą być takie same',
          },
        })}
        error={errors.repeatPassword}
      />
      {submitError && <Error text={submitError} />}

      <SubmitButton text={'Zarejestruj'} onClick={handleSubmit(onSubmit)} progress={'success'} />
    </form>
  );
};

export default SignUpForm;
