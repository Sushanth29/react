import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './plus.png';

const NavigationBar = () => {
  const navbarStyle = {
    height: '57px',
    backgroundColor: '#f0f0f0', 
    borderRadius: '5px', 
    padding: '10px', 
  };

  const brandStyle = {
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Navbar.Brand style={brandStyle}>
        <img
          src={logo}
          alt="Logo"
          height="45"
          className="d-inline-block align-top"
        />
        {' Addition of Two numbers'}
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBar;
