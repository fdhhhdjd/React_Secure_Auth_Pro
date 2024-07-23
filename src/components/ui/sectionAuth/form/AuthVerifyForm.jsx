import React from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '@/components/common/buttons/Button';
import { verificationEmail } from '@/features/auth/authThunk';

import { HttpStatusCode } from '@/constants';

const AuthVerifyForm = () => {
  const dispatch = useDispatch();
  const { email, userId, token } = useParams();

  const handleVerify = async () => {
    const resultRedux = await dispatch(
      verificationEmail({
        email,
        user_id: userId,
        token
      })
    );
    if (resultRedux.payload.status === HttpStatusCode.OK) {
      return (window.location.href = '/user');
    }
    return null;
  };

  return (
    <React.Fragment>
      <div className='max-w-xl px-5 text-center'>
        <h2 className='mb-2 font-bold text-zinc-800'>Check your inbox</h2>
        <p className='mb-5 text-lg'>
          We are glad, that you’re with us ? We’ve sent you a verification link
          to the email address{' '}
          <span className='font-medium text-orange-500'>
            nguyentientai@gmail.com
          </span>
          .
        </p>
        <Button
          type='submit'
          className='text-white bg-orange-500 py-1.5 px-4 rounded font-bold w-full hover:bg-orange-600'
          onClick={handleVerify}
        >
          Open the App →
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AuthVerifyForm;
