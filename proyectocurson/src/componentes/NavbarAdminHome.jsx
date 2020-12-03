import React from 'react';
import Logo from '../img/logo-navbar.png';
import '../css/navbar.css';

export default function NavbarAdminHome() {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-blanco p-2">
                <button className="navbar-toggler nav-menuHamb" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand m-0 d-none d-sm-none d-md-block" href="index.html"><img className="img-fluid logo" src={Logo} alt="logo curson navbar" />
                </div>
            </div>
            <div className="navbar-nav bg-light">
                <ul className="text-dark text-center my-auto">
                    <li className="nav-item navbar-text m-1 pr-2 pl-2 active">Usuarios</li>
                    <li className="nav-item navbar-text m-1 pr-2 pl-2">Cursos</li>
                    <li className="nav-item navbar-text m-1 pr-2 pl-2">Categorías</li>
                    <li className="nav-item navbar-text m-1 pr-2 pl-2">Solicitudes</li>
                </ul>
            </div>
        </div>
    )
}
