import React from 'react';

import Demo from '@/components/Demo';

const App = () => {
  const [count, __] = React.useState(0);

  return (
    <React.Fragment>
      <p className="text-3xl font-bold underline">Hello</p>
      <h2>{count}</h2>
      <Demo />
    </React.Fragment>
  );
};

export default App;
