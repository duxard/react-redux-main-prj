import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as NavbarReact } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';

import SignedInLinks from './SignedInLinks';

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavbarReact collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavbarReact.Brand href="#home">React-Bootstrap</NavbarReact.Brand>
          <NavbarReact.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarReact.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/*<Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>*/}
              <Link to='/'  className="nav-link">Home</Link>
              <Link to='#about' className="nav-link">About</Link>
              <SignedInLinks />
            </Nav>
          </NavbarReact.Collapse>
        </NavbarReact>
      </nav>
    </div>
  );
}

export default Navbar;
