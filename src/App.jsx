import React from 'react';

import { getAxios } from '@/services';

const App = () => {
  const [count, __] = React.useState(0);
  React.useEffect(() => {
    const getProfile = async () => {
      const result = await getAxios('/user/profile/1');
      console.info(result);
    };
    getProfile();
  }, []);
  return (
    <React.Fragment>
      <p className="text-3xl font-bold underline">Hello</p>
      <h2>{count}</h2>
    </React.Fragment>
  );
};

export default App;
