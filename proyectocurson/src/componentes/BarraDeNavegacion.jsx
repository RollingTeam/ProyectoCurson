import React , { useState } from 'react';
import Modal from './Modal';
import LogIn from "../componentes/LogIn";
import Register from "../componentes/Register";
import Logo from '../img/logo-navbar.png';
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'

export default function BarraDeNavegacion() {

        //Estados de modal
    const [openLoginModal, setOpenLoginModal] = useState(false)
    const [openRegisterModal, setOpenRegisterModal] = useState(false)
    const [login, setLogin] = useState({
        credenciales:{
        userName:"",
        password:""
        }
    })
    const [registro, setRegistro] = useState({
        formulario:{
        nombre:"",
        userName:"",
        email:"",
        password:"",
        passwordRepetir:"",
        logueado: false,
        estado: "activo"
        }
    })
    
    const [openModal, setOpenModal] = useState(false)

    const modalIsOpen = () =>{
        setOpenModal(true)
    }

    const modalIsClose = () =>{
        setOpenModal(false)
    }

    //Funciones para controlar apertura y cierre de modales

    const modalLoginOpen = () =>{
        setOpenLoginModal(true)
    }

    const modalLoginClose = () =>{
        setOpenLoginModal(false)
    }


    const modalRegisterOpen = () =>{
    setOpenLoginModal(false)
    setOpenRegisterModal(true)
    }

    const modalRegisterClose = () =>{
    setOpenRegisterModal(false)
    }

    //Funciones para controlar cambios de estados de modales

    const handleChangeLogin = (e) => {
    setLogin({
    credenciales:{
        ...login.credenciales,
        [e.target.name] : e.target.value
    }
    })
    }

    const handleChangeRegistro = (e) => {
    setRegistro({
    formulario:{
        ...registro.formulario,
        [e.target.name] : e.target.value
    }
    })
    }

    //Funciones para controlar submit de modales

    const inciarSesion = async(e) => {

    e.preventDefault()

    try {
    const resp = await fetch(`http://localhost:3005/users?userName=${login.credenciales.userName}`)
    const data = resp.json()

    } catch (error) {
    console.warn(error)
    };
    };

    const handleSubmitRegistro = async () => {

    try {
    const resp = await fetch("http://localhost:3005/users", {
        method: "POST",
        body: JSON.stringify(registro.formulario),
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
    });
    console.log('Hiciste submit');
    } catch (error) {
    console.warn(error);
    };
    };
    
    return (
        <div>
            <Navbar expand="lg" className="bg-blanco">
                <Navbar.Brand className="p-0 m-0"><img className="img-fluid logo" src={Logo} alt="logo-curson" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown className="text-style" title="Cursos" id="basic-nav-dropdown">
                            <NavDropdown.Item className="text-style" href="#destacados">Destacados</NavDropdown.Item>
                            <NavDropdown.Item className="text-style" href="/cursos/#todosLosCursos">Todos los Cursos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-style" href="#categorias">Categorías</Nav.Link>
                        <Nav.Link className="text-style" href="/cursos">Publicá tu Curso</Nav.Link>
                        <Nav.Link className="text-style" href="#reviews">Reviews</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button variant="outline-dark">Buscar</Button>
                    </Form>
                    <Button className="btn btn-danger float-right" onClick={modalLoginOpen}>Log in</Button>
                    {openLoginModal &&
                    <Modal>
                        <LogIn modalLoginClose={modalLoginClose}
                            modalRegisterOpen={modalRegisterOpen} 
                            credencialesValue={login.credenciales} 
                            handleChangeLogin={handleChangeLogin}
                            inciarSesion={inciarSesion}/>
                    </Modal>}
            
                    {openRegisterModal &&
                    <Modal>
                        <Register modalRegisterClose={modalRegisterClose} 
                                    datosRegistro={registro.formulario} 
                                    handleChangeRegistro={handleChangeRegistro}
                                    handleSubmitRegistro={handleSubmitRegistro}
                                    setRegistro={setRegistro}/>
                    </Modal>}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}





