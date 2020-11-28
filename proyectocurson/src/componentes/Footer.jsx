import React from 'react';
import '../css/footer.css';
import {IconContext} from 'react-icons';
import { FaDiscord, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; 

export default function Footer() {
    return (
        <div className="container-fluid bg-negro fixed-bottom p-3">
            <div className="row">
                <div className="col-12 col-sm-6 text-white text-center">
                    <ul className="p-0">
                        <li>Inicio</li>
                        <li>Cursos</li>
                        <li>Categorías</li>
                        <li>Publica tu curso</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <IconContext.Provider value={{ size:"2em" }}>
                <div className="col-12 col-sm-6 text-white text-center m-0 pt-4">
                    <FaDiscord className="estilo-icon"/> 
                    <FaTwitter className="estilo-icon"/> 
                    <FaFacebook className="estilo-icon"/>
                    <FaInstagram className="estilo-icon"/>
                </div>
                </IconContext.Provider>
            </div>
            <div className="row text-center text-white m-0 p-2">
                <p className="mx-auto mt-2">2020 &copy; Diseñado y desarrolado por estudiantes de RollingCode School</p>
            </div>            
        </div>
    )
}
