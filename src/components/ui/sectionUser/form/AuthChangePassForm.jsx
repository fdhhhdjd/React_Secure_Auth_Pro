import React from 'react';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import InputField from '@/components/common/inputs/InputField';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import useAppSelector from '@/hooks/useAppSelector';

const AuthChangePassForm = () => {
  const { isLoading } = useAppSelector(state => state.auth);

  const [state, setState] = React.useState({
    password: ''
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
          label='Change Password'
          type='password'
          placeholder='••••••••'
          name={state.password}
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
            Change Password
          </Button>
        )}{' '}
      </FormSubmit>
    </React.Fragment>
  );
};

export default AuthChangePassForm;
