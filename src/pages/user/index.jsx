import React from 'react';

import { Outlet } from 'react-router-dom';

const User = () => (
  <React.Fragment>
    <h1>User</h1>
    <Outlet />
  </React.Fragment>
);

export default User;
