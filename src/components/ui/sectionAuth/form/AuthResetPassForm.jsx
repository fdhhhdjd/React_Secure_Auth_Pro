import React from 'react';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import InputField from '@/components/common/inputs/InputField';
import ConditionalLink from '@/components/common/links/ConditionalLink';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import Paragraph from '@/components/common/paragraph/Paragraph';
import useAppSelector from '@/hooks/useAppSelector';

import { RoutePaths } from '@/configs';

const AuthResetPassForm = () => {
  const { isLoading } = useAppSelector(state => state.auth);

  const [state, setState] = React.useState({
    password: '',
    re_password: ''
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <FormSubmit className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
        <InputField
          id='password'
          label='New Password'
          type='password'
          placeholder='••••••••'
          name={state.password}
          onChange={handleChange}
          isPassword
        />
        <InputField
          id='re_password'
          label='Repeat Password'
          type='password'
          placeholder='••••••••'
          name={state.re_password}
          onChange={handleChange}
          isPassword
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Button
            type='submit'
            className='text-white bg-orange-500 py-1.5 px-4 rounded font-bold w-full hover:bg-orange-600'
          >
            Reset Password
          </Button>
        )}{' '}
        <Paragraph className='text-sm font-light text-gray-500'>
          Do you already remember password ? &nbsp;
          <ConditionalLink
            className='font-medium text-orange-500 hover:underline'
            to={RoutePaths.AUTH.SIGN_IN}
          >
            Sign In
          </ConditionalLink>
        </Paragraph>
      </FormSubmit>
    </React.Fragment>
  );
};

export default AuthResetPassForm;
