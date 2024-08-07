import React from 'react';

import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import InputField from '@/components/common/inputs/InputField';
import ConditionalLink from '@/components/common/links/ConditionalLink';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import Paragraph from '@/components/common/paragraph/Paragraph';
import SocialAuthButton from '@/components/ui/sectionAuth/SocialAuthButton';
import { loginGoogleUser, loginUser } from '@/features/auth/authThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { auth, googleAuthProvider, RoutePaths } from '@/configs';
import { codeConstants, HttpStatusCode, typeLogin } from '@/constants';
import { isValidPassword, isValueEmpty } from '@/helpers';
import { showToastWarning } from '@/utils';

const AuthSignInForm = () => {
  const { isLoading } = useAppSelector(state => state.auth);

  const [state, setState] = React.useState({
    identifier: '',
    password: ''
  });
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleRedirect = (rs, type) => {
    const towFactorDisabled =
      rs.payload.status === HttpStatusCode.OK && !rs.payload.metadata.code;
    if (towFactorDisabled) {
      return (window.location.href = '/');
    }

    const towFactorEnable =
      rs.payload.status === HttpStatusCode.OK &&
      rs.payload?.metadata?.code === codeConstants.TWO_FACTOR_ENABLE &&
      type === typeLogin.LOGIN;
    if (towFactorEnable) {
      Navigate(RoutePaths.AUTH.OTP);
    }

    return null;
  };

  const loginWithGooglePopup = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const {
        user: { uid }
      } = result;

      const resultRedux = await dispatch(loginGoogleUser({ type: 10, uid }));
      handleRedirect(resultRedux, typeLogin.GOOGLE);
    } catch (error) {
      console.info(error.message);
    }
    return null;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (isValueEmpty(state)) {
      return showToastWarning('Please enter full input!');
    }

    if (!isValidPassword(state.password)) {
      return showToastWarning('Email, username or phone or Pass is invalid!');
    }

    const resultRedux = await dispatch(loginUser(state));
    return handleRedirect(resultRedux, typeLogin.LOGIN);
  };

  return (
    <React.Fragment>
      <FormSubmit id='connect-google-button' onSubmit={handleSubmit}>
        <SocialAuthButton
          provider='Google'
          onClick={() => loginWithGooglePopup()}
        />
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
          value={state.identifier}
          onChange={handleChange}
          autoFocus
        />
        <InputField
          id='password'
          label='Password'
          type='password'
          placeholder='••••••••'
          name={state.password}
          value={state.password}
          onChange={handleChange}
          isPassword
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
