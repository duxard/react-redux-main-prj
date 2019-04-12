import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as NavbarReact } from 'react-bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavbarReact collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavbarReact.Brand href="#home">React-Bootstrap</NavbarReact.Brand>
          <NavbarReact.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarReact.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </NavbarReact.Collapse>
        </NavbarReact>
      </nav>
    </div>
  );
}

export default Navbar;
