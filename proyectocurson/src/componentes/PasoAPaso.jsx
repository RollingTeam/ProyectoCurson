import React from 'react'

import '../css/pasoApaso.css'
import Card1 from '../img/card1.jpg'
import Card2 from '../img/card2.jpg'
import Card3 from '../img/card3.jpg'
import Card4 from '../img/card4.jpg'

export default function PasoAPaso() {
    return (
        <div className="row mb-4">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2 mb-2">
                <div className="pasos">
                    <img class="img-fluid"
                        src={Card1} alt="pasos para cargar tu curso" />
                    <div className="overlay">
                        <div className="text-center mt-4 paso"><strong>1. Registro</strong> <br /> Debes registarte como
                        usuario en CursOn. Si ya tienes un usuario, basta con iniciar sesión.</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2 mb-2">
                <div className="pasos">
                    <img className="img-fluid"
                        src={Card2} alt="pasos para cargar tu curso"/>
                    <div className="overlay">
                        <div className="text-center mt-4 paso"><strong>2. Completar formulario</strong> <br/> Cuentanos de
                            que se trata el curso que ofreces: nombre, contenido, duración, etc.</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2 mb-2">
                <div className="pasos">
                    <img className="img-fluid"
                        src={Card3} alt="pasos para cargar tu curso"/>
                    <div className="overlay">
                        <div className="text-center mt-4 paso"><strong>3. Evalución de solicitud</strong> <br/> Tu solicitud
                            será evaluda y serás notificado una vez sea aprobada.</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2 mb-2">
                <div className="pasos">
                    <img className="img-fluid"
                        src={Card4} alt="pasos para cargar tu curso"/>
                    <div className="overlay">
                        <div className="text-center mt-4 paso"><strong>4. Revisá tu email</strong> <br/> En un plazo de 48 h hábiles te llegará la confirmación de tu solicitud.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
