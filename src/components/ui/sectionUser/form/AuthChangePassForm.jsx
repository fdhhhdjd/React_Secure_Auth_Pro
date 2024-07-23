import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import InputField from '@/components/common/inputs/InputField';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import { changePassword } from '@/features/users/userThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { HttpStatusCode } from '@/constants';
import { isValidPassword, isValueEmpty } from '@/helpers';
import { showToastSuccess, showToastWarning } from '@/utils';

const AuthChangePassForm = () => {
  const dispatch = useDispatch();

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

    if (isValueEmpty(state)) {
      return showToastWarning('Please enter full input!');
    }

    if (!isValidPassword(state.password)) {
      return showToastWarning(
        'Must to have at least 6 characters, 1 lowercase, 1 uppercase and 1 number.'
      );
    }

    return dispatch(
      changePassword({
        password: state.password
      })
    ).then(rs => {
      if (rs.payload.status === HttpStatusCode.OK) {
        showToastSuccess('Password changed successfully');
        setState({ password: '' });
      }
    });
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
          value={state.password}
          onChange={handleChange}
          isPassword
          autoFocus
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
