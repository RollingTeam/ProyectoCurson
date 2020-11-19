import React from 'react';
import '../css/footer.css';
import {IconContext} from 'react-icons';
import { FaDiscord, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; 

export default function Footer() {
    return (
        <div className="container-fluid bg-negro p-3 fixed-bottom">
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
                    <FaDiscord /> 
                    <FaTwitter  /> 
                    <FaFacebook />
                    <FaInstagram />
                </div>
                </IconContext.Provider>
            </div>
            <div className="row text-center text-white m-0 p-2">
                <p className="mx-auto mt-2">2020 &copy; Diseñado y desarrolado por estudiantes de RollingCode School</p>
            </div>            
        </div>
    )
}
