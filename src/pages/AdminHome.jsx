import React, { useState, useEffect } from 'react'
import NavbarAdminHome from '../componentes/NavbarAdminHome'
import UsuariosList from '../componentes/UsuariosList'
import {getUsuarios} from '../helpers/getUsuarios'

export default function AdminHome(props) {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        let validacion = JSON.parse(localStorage.getItem('role')) || "";
        if(validacion !== 'ADMIN_ROLE'){
            alert('No estas autorizado para ingresar a esta sección. Serás redireccionado al Inicio.');
            props.history.push('/')
        }
    }, [])
    
    useEffect(() => {
        getUsuarios()
        .then((response)=>setUsuarios(response))
        .catch((error)=>console.log(error))  
    }, [usuarios])

    return (
        <div>
            <NavbarAdminHome />
            <div className="container mt-5">
                <UsuariosList usuarios={usuarios} />
            </div>
        </div>
    )
}
