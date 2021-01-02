import React from 'react';
import Logo from '../img/logo-navbar.png';
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavbarAdminHome() {
    return (
        <div>
            <Navbar expand="lg" className="bg-blanco">
                <Navbar.Brand className="p-0 m-0"><img className="img-fluid logo" src={Logo} alt="logo-curson" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-style" href="/">Usuarios</Nav.Link>
                        <NavDropdown className="text-style" title="Cursos" id="basic-nav-dropdown">
                            <NavDropdown.Item className="text-style" href="/admin/nuevoCurso">Nuevo Curso</NavDropdown.Item>
                            <NavDropdown.Item className="text-style" href="/admin/cursos">Ver Cursos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="text-style" title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item className="text-style" href="/admin/nuevaCategoria">Nueva Categoria</NavDropdown.Item>
                            <NavDropdown.Item className="text-style" href="/admin/categorias">Ver Categorias</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-style" href="/">Solicitudes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
