import React from 'react'

import '../css/nabvar.css';

import Logo from '../img/logo-navbar.png'

export default function Navbar() {
    return (
      <div className="Navbar navbar-expand-lg navbar-light bg-blanco p-2">
        <div className="Navbar__brand  m-0 d-none d-sm-none d-md-block">
          <img className="Navbar__brand-logo" src={Logo} alt="logo de curson" />        
        </div>
      </div>
    );
  }