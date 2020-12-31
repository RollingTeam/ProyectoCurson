import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function UserMenu() {
    return (
        <>
            <NavDropdown class="menu_usuario">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <NavDropdown.Item href="#">Mi Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#">Mis cursos</NavDropdown.Item>    
            </NavDropdown>   
        </>
    )
}
