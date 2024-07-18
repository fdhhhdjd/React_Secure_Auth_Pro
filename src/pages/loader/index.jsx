import React from 'react';

import LockImage from '@/assets/images/lock.gif';

const Loader = () => {
  return (
    <React.Fragment>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-y-orange-500' />
        <img src={LockImage} className='rounded-full h-28 w-28' />
      </div>
    </React.Fragment>
  );
};

export default Loader;
