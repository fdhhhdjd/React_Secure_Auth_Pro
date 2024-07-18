import React from 'react';

import Loader from '@/pages/loader';

const withSuspense =
  (Component, fallback = <Loader />) =>
  props => {
    return (
      <React.Suspense fallback={fallback}>
        <Component {...props} />
      </React.Suspense>
    );
  };

export default withSuspense;
