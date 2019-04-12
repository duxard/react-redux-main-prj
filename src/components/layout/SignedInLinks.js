import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <div>
      <NavLink to='/' className="nav-link d-inline-block">New project</NavLink>
      <NavLink to='/' className="nav-link d-inline-block">Log out</NavLink>
      <NavLink to='/'className="nav-link d-inline-block">NN</NavLink>
    </div>
  );
}

export default SignedInLinks;
