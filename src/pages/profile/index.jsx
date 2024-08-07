import React from 'react';

import { useDispatch } from 'react-redux';

import User from '@/assets/images/user.jpg';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import { getProfile } from '@/features/users/userThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { USER_KEYS } from '@/configs';
import { cn } from '@/helpers';
import { convertGender, getItem } from '@/utils';

const Profile = () => {
  const dispatch = useDispatch();

  const { user, isLoading } = useAppSelector(state => state.user);

  React.useEffect(() => {
    const userId = getItem(USER_KEYS.USER_ID);
    if (userId) {
      dispatch(
        getProfile({
          userId
        })
      );
    }
  }, []);

  return (
    <React.Fragment>
      <div
        className={cn(
          'relative max-w-md mx-auto md:max-w-2xl mt-32 min-w-0 break-words w-full mb-6  rounded-xl',
          !isLoading && 'bg-slate-50 shadow-lg'
        )}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          user && (
            <div className='px-6'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full flex justify-center'>
                  <div className='relative'>
                    <img
                      src={user.avatar || User}
                      className='shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
                    />
                  </div>
                </div>
                <div className='w-full text-center mt-20' />
              </div>
              <div className='text-center mt-2'>
                <h3 className='text-2xl text-slate-700 font-bold leading-normal mb-1'>
                  {user.fullname || 'Nguyen Tien Tai'}
                </h3>
                {user.username && (
                  <div className='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
                    <i className='fas fa-map-marker-alt mr-2 text-slate-400 opacity-75' />
                    {user.username}
                  </div>
                )}
                {user.hidden_phone_number && (
                  <div className='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
                    <i className='fas fa-map-marker-alt mr-2 text-slate-400 opacity-75' />
                    {user.hidden_phone_number}
                  </div>
                )}
                <div className='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
                  <i className='fas fa-map-marker-alt mr-2 text-slate-400 opacity-75' />
                  {convertGender(user.gender || 0)}
                </div>
                <div className='text-xs mt-0 mb-2 text-slate-400 font-bold uppercase'>
                  <i className='fas fa-map-marker-alt mr-2 text-slate-400 opacity-75' />
                  {user.hidden_email}
                </div>
              </div>
              <div className='mt-6 py-6 border-t border-slate-200 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full px-4'>
                    <p className='font-light leading-relaxed text-slate-600 mb-4'>
                      An artist of considerable range, Mike is the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </React.Fragment>
  );
};

export default Profile;
