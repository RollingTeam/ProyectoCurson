import React from 'react'
import '../css/navbar.css';
import Logo from '../img/logo-navbar.png'

export default function Navbar() {
  return (
  <div>
    <div className="navbar navbar-expand-lg navbar-light bg-negro p-2">
      <button className="navbar-toggler nav-menuHamb" type="button" data-toggle="collapse"
        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-brand m-0 d-none d-sm-none d-md-block" href="index.html"><img className="img-fluid logo" src={Logo} alt="logo curson navbar" />
      </div>
    </div>
    <div className="navbar-nav bg-blanco">
        <ul className="text-dark text-center my-auto">
        <li className="nav-item navbar-text m-1 pr-2 pl-2 active">Categorías</li>
        <li className="nav-item navbar-text m-1 pr-2 pl-2">Todos los Cursos</li>
        <li className="nav-item navbar-text m-1 pr-2 pl-2">Publica tu Curso</li>
        </ul>
      </div>
  </div>  
);
}





