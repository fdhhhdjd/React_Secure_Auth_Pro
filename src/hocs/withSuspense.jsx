// hoc/withSuspense.js
import { Suspense } from 'react';

const withSuspense =
  (Component, fallback = <div>Loading...</div>) =>
  props => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };

export default withSuspense;
