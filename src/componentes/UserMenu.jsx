import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import '../css/modal.css'

export default function UserMenu({LogOut, usuarioRole}) {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="outline-danger ml-2">
                    <i class='fa fa-user-circle fa-lg' aria-hidden="true"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right mt-2">
                    {usuarioRole === 'ADMIN_ROLE' &&
                        <Dropdown.Item href="/admin">Sección Admin</Dropdown.Item>
                    }
                    <Dropdown.Item href="#/action-1">Mis cursos</Dropdown.Item>
                    <Dropdown.Item onClick={LogOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
