import { SubmitButton, InputWithLabel, Error } from '../common';
// import { useHistory } from 'react-router';
// import { signUp } from '../../API/auth/methods';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const SignUpForm = () => {
  // TODO enhance validation and form submit error handling
  const [submitError] = useState(null);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // const promise = signUp(data.login, data.password);
    // promise
    //   .then(() => {
    //     history.push('/');
    //   })
    //   .catch(() => {
    //     setSubmitError('Błąd rejestracji');
    //   });
  };
  // const history = useHistory();
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
