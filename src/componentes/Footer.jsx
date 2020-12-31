import React from 'react';
import '../css/footer.css';
import {IconContext} from 'react-icons';
import { FaDiscord, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; 
import NavLink from 'react-bootstrap/NavLink'
import '../css/iconsTable.css'
export default function Footer() {
    return (
        <div className="container-fluid bg-negro p-3">
            <div className="row">
                <div className="col-12 col-sm-6 text-white text-center">
                    <ul className="p-0">
                    <NavLink href="#inicio" className="text-white p-0"><li>Inicio</li></NavLink>
                    <NavLink href="#destacados" className="text-white p-0"><li>Cursos</li></NavLink>
                    <NavLink href="#categorias" className="text-white p-0"><li>Categorías</li></NavLink>
                    <NavLink href="#mainPublicarContainer" className="text-white p-0"><li>Publica tu curso</li></NavLink>   
                    <NavLink href="#reviews" className="text-white p-0"><li>Reviews</li></NavLink>
                    </ul>
                </div>
                <IconContext.Provider value={{ size:"2em" }}>
                <div className="col-12 col-sm-6 text-white text-center m-0 pt-4">
                    <FaDiscord className="estilo-icon icons-footer"/>
                    <FaTwitter className="estilo-icon icons-footer"/> 
                    <FaFacebook className="estilo-icon icons-footer"/>
                    <FaInstagram className="estilo-icon icons-footer"/>
                </div>
                </IconContext.Provider>
            </div>
            <div className="row text-center text-white m-0 p-2">
                <p className="mx-auto mt-2">2020 &copy; Diseñado y desarrolado por estudiantes de RollingCode School</p>
            </div>            
        </div>
    )
}
