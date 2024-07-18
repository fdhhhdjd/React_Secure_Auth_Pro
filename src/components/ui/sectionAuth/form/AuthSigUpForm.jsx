import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import InputField from '@/components/common/inputs/InputField';
import ConditionalLink from '@/components/common/links/ConditionalLink';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import Paragraph from '@/components/common/paragraph/Paragraph';
import { loginUser } from '@/features/auth/authThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { RoutePaths } from '@/configs';

const AuthSignUpForm = () => {
  const { isLoading } = useAppSelector(state => state.auth);

  const [state, setState] = React.useState({
    identifier: ''
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(state));
  };

  return (
    <React.Fragment>
      <FormSubmit className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
        <InputField
          id='identifier'
          label='Email'
          type='email'
          placeholder='email@gmail.com'
          name={state.identifier}
          onChange={handleChange}
        />
        <div className='flex items-center justify-between'>
          <ConditionalLink
            to={RoutePaths.AUTH.FORGOT_PASSWORD}
            className='text-sm font-medium text-orange-500 hover:underline'
          >
            Forgot password?
          </ConditionalLink>
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Button
            type='submit'
            className='text-white bg-orange-500 py-1.5 px-4 rounded font-bold w-full hover:bg-orange-600'
          >
            Sign Up
          </Button>
        )}

        <Paragraph className='text-sm font-light text-gray-500'>
          Do you already have an account ? &nbsp;
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

export default AuthSignUpForm;
