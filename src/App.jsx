import React from 'react';

const App = () => {
  const [count, __] = React.useState(0);

  return (
    <React.Fragment>
      <p className="text-3xl font-bold underline">Hello</p>
      <h2>{count}</h2>
    </React.Fragment>
  );
};

export default App;
