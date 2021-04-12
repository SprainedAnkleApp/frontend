import { SubmitButton, InputWithLabel, Error } from '../common';
import { useHistory } from 'react-router';
import { signUp } from '../../API/signup/methods';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const SignUpForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError, setSubmitError] = useState(null);
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
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

      <InputWithLabel
        type={'password'}
        name={'repeatPassword'}
        text={'Powtórz hasło'}
        placeholder={'Powtórz hasło'}
        register={register({
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
