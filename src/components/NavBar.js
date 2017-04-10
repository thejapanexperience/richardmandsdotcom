import React from 'react';
import {Link, IndexLink} from 'react-router';

const NavBar = () => {
  return (
    <div>
      <IndexLink className="navbar" to="/">Homely</IndexLink>
      {' | '}
      <Link className="navbar" to="/fuel-savings">Demo App</Link>
      {' | '}
      <Link className="navbar" to="/about">About</Link>
      <br/>    </div>
  );
};

export default NavBar;
