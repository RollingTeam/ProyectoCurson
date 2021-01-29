import React , { useState, useEffect } from 'react';
import Modal from './Modal';
import LogIn from "../componentes/LogIn";
import Register from "../componentes/Register";
import UserMenu from './UserMenu'
import Logo from '../img/logo-navbar.png';
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router-dom'

export default function BarraDeNavegacion({ingreso, setIngreso}) {

    const token = JSON.parse(localStorage.getItem("token")) || "";
    useEffect(() => {
        if (ingreso.token.length > 0) {
          localStorage.setItem("id", JSON.stringify(ingreso.id));
          consultarRole();
        }
      }, [ingreso]);


      const LogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id')
        setIngreso({
            token: "",
            id: "",
        })
    };

    //------------ Role de usuario-------------//

    const [usuarioRole, setUsuarioRole] = useState("")

    const consultarRole = async() => {
        let id = JSON.parse(localStorage.getItem('id'))
        try {
            // const resp = await fetch(`http://localhost:3005/usuarios/${id}`);
            const resp = await fetch(`https://afternoon-fjord-84174.herokuapp.com/usuarios/${id}`);
            const data = await resp.json();
            console.log(data)
            setUsuarioRole(data.usuario.role)
        } catch (error) {
            console.log(error)
        }

    }

    //------------ Estados de modal-------------//

    const [openLoginModal, setOpenLoginModal] = useState(false)
    const [openRegisterModal, setOpenRegisterModal] = useState(false)


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

        
    return (
        <div>
            <Navbar expand="lg" className="bg-blanco">
                <Navbar.Brand className="p-0 m-0 d-none d-sm-block"><Link to="/"><img className="img-fluid logo" src={Logo} alt="logo-curson" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown className="text-style" title="Cursos" id="basic-nav-dropdown">
                            <NavDropdown.Item className="text-style" href="#destacados">Destacados</NavDropdown.Item>
                            <NavDropdown.Item className="text-style" href="/cursos/#todosLosCursos">Todos los Cursos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-style" href="#categorias">Categorías</Nav.Link>
                        <Nav.Link className="text-style" href="#mainPublicarContainer">Publicá tu Curso</Nav.Link>
                        <Nav.Link className="text-style" href="#reviews">Reviews</Nav.Link>
                    </Nav>
                    
                    {token ? (
                        <UserMenu LogOut={LogOut} usuarioRole={usuarioRole}/>
                        ) : (
                        <Button className="btn btn-danger ml-2 float-right" onClick={modalLoginOpen}>Log in</Button>       
                    )}
                    {openLoginModal &&
                    <Modal>
                        <LogIn modalLoginClose={modalLoginClose}
                            modalRegisterOpen={modalRegisterOpen} 
                            setIngreso={setIngreso}/>
                    </Modal>}
            
                    {openRegisterModal &&
                    <Modal>
                        <Register modalRegisterClose={modalRegisterClose}
                                  setIngreso={setIngreso} />
                    </Modal>}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}





