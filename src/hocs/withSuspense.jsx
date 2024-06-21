// hoc/withSuspense.jsx
import { Suspense } from 'react';

const withSuspense =
  (Component, fallback = <div>Loading...</div>) =>
  props => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );

export default withSuspense;
