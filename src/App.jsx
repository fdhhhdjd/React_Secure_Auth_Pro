import React from 'react';

import './App.css';

const App = () => {
  const [count, __] = React.useState(0);

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <h2>{count}</h2>
    </React.Fragment>
  );
};

export default App;
