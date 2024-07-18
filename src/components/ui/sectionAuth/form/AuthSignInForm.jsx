import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import InputField from '@/components/common/inputs/InputField';
import ConditionalLink from '@/components/common/links/ConditionalLink';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import Paragraph from '@/components/common/paragraph/Paragraph';
import SocialAuthButton from '@/components/ui/sectionAuth/SocialAuthButton';
import { loginUser } from '@/features/auth/authThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { RoutePaths } from '@/configs';

const AuthSignInForm = () => {
  const { isLoading } = useAppSelector(state => state.auth);

  const [state, setState] = React.useState({
    identifier: '',
    password: ''
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
      <FormSubmit id='connect-google-button' onSubmit={handleSubmit}>
        <SocialAuthButton provider='Google' />
      </FormSubmit>

      <div className='flex items-center'>
        <div className='w-full h-0.5 bg-gray-200' />
        <div className='px-5 text-center text-gray-500'>or</div>
        <div className='w-full h-0.5 bg-gray-200' />
      </div>
      <FormSubmit className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
        <InputField
          id='identifier'
          label='Email Or Phone, Username'
          type='email'
          placeholder='Email Or Phone, Username'
          name={state.identifier}
          onChange={handleChange}
        />
        <InputField
          id='password'
          label='Password'
          type='password'
          placeholder='••••••••'
          name={state.password}
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
            Sign in
          </Button>
        )}

        <Paragraph className='text-sm font-light text-gray-500'>
          Don’t have an account yet? &nbsp;
          <ConditionalLink
            className='font-medium text-orange-500 hover:underline'
            to={RoutePaths.AUTH.SIGN_UP}
          >
            Sign up
          </ConditionalLink>
        </Paragraph>
      </FormSubmit>
    </React.Fragment>
  );
};

export default AuthSignInForm;
