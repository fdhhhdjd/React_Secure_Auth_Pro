import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <React.Fragment>
    <Link to='/about'>About</Link>
    <Link to='/about/create'>Create</Link>
  </React.Fragment>
);

export default Header;
