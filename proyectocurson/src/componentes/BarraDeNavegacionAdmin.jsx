import React from 'react';
import Logo from '../img/logo-navbar.png';
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'

export default function BarraDeNavegacionAdmin() {
    return (
        <div>
            <Navbar expand="lg" className="bg-blanco">
                <Navbar.Brand className="p-0 m-0"><img className="img-fluid logo" src={Logo} alt="logo-curson" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="text-style" href="#home">Usuarios</Nav.Link>
                        <NavDropdown className="text-style" title="Cursos" id="basic-nav-dropdown">
                            <NavDropdown.Item className="text-style" href="#action/3.1">Nuevo Curso</NavDropdown.Item>
                            <NavDropdown.Item className="text-style" href="#action/3.2">Ver Cursos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="text-style" title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item className="text-style" href="#action/3.1">Nueva Categoría</NavDropdown.Item>
                            <NavDropdown.Item className="text-style" href="#action/3.2">Ver Categorías</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-style" href="#home">Solicitudes</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-dark">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

