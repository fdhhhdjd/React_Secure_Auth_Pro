import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import InputField from '@/components/common/inputs/InputField';
import ConditionalLink from '@/components/common/links/ConditionalLink';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import Paragraph from '@/components/common/paragraph/Paragraph';
import { forgetPass } from '@/features/auth/authThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { RoutePaths } from '@/configs';
import { HttpStatusCode } from '@/constants';
import { isValidEmail, isValueEmpty } from '@/helpers';
import { showToastWarning } from '@/utils';

const AuthForgetForm = () => {
  const { isLoading } = useAppSelector(state => state.auth);

  const [state, setState] = React.useState({
    email: ''
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (isValueEmpty(state)) {
      return showToastWarning('Please enter full input!');
    }

    if (!isValidEmail(state.email)) {
      return showToastWarning('Email is invalid!');
    }

    const resultRedux = await dispatch(forgetPass(state));

    if (resultRedux?.payload?.status === HttpStatusCode.OK) {
      setState({ email: '' });
    }
    return null;
  };

  return (
    <React.Fragment>
      <FormSubmit className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
        <InputField
          id='email'
          label='Forget'
          type='email'
          placeholder='Email'
          name={state.email}
          value={state.email}
          onChange={handleChange}
          autoFocus
        />
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

export default AuthForgetForm;
