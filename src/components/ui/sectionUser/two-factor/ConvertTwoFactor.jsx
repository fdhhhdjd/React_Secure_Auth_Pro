/* eslint-disable no-unneeded-ternary */
/* eslint-disable camelcase */
import React from 'react';

import { useDispatch } from 'react-redux';

import { twoFactorAuth } from '@/features/users/userThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { cn } from '@/helpers';

const ConvertTwoFactor = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector(state => state.user);
  const [currentTwoFactor, setCurrentTwoFactor] = React.useState(
    user?.two_factor_enabled
  );

  React.useEffect(() => {
    setCurrentTwoFactor(user?.two_factor_enabled);
  }, [user?.two_factor_enabled]);

  const handleTwoFactorChange = () => {
    const changeFactor = !currentTwoFactor;
    dispatch(
      twoFactorAuth({
        two_factor_enabled: changeFactor
      })
    )
      .then(() => {
        setCurrentTwoFactor(changeFactor);
      })
      .catch(error => {
        console.error('Error updating two-factor authentication:', error);
      });
  };

  return (
    <React.Fragment>
      <span className='text-black-400 mb-2'>Two Factor Auth</span>
      <div className='w-full px-4 flex items-center justify-center'>
        <label className='flex cursor-pointer select-none items-center'>
          <div className='relative'>
            <input
              type='checkbox'
              checked={currentTwoFactor}
              onChange={handleTwoFactorChange}
              className='sr-only'
            />
            <div className='block h-8 w-14 rounded-full bg-[#ccc]' />
            <div
              className={cn(
                'dot absolute left-1 top-1 h-6 w-6 rounded-full  transition',
                currentTwoFactor ? 'translate-x-6' : '',
                currentTwoFactor ? 'bg-green-500' : 'bg-white'
              )}
            />

            {/*  ${} */}
          </div>
        </label>
      </div>
    </React.Fragment>
  );
};

export default ConvertTwoFactor;
