import React from 'react'

import '../css/pasoApaso.css'


export default function PasoAPaso() {
    const url = `http://drive.google.com/uc?export=view&id=`
    return (
        <div className="row mb-4 container-img">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4 mb-4 mx-auto">
                <div className="pasos mx-auto">
                    <img className="img-fluid paso-paso paso_paso"
                        src={`${url}1Vrx01P1j-DoceKlWOKQ1h6lQ5EjOKqsT`} alt="pasos para cargar tu curso" />
                    <div className="overlay">
                        <div className="text-center paso"><strong>1. Registro</strong> <br /> Debes registarte como
                        usuario en CursOn. Si ya tienes un usuario, basta con iniciar sesión.</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4 mb-4">
                <div className="pasos">
                    <img className="img-fluid paso-paso"
                        src={`${url}1iPPQFasnfjIxuF0ipnKQ0thb8yJNyQ0N`} alt="pasos para cargar tu curso" />
                    <div className="overlay">
                        <div className="text-center paso"><strong>2. Completar formulario</strong> <br /> Cuentanos de
                            que se trata el curso que ofreces: nombre, contenido, duración, etc.</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4 mb-4">                
                <div className="pasos">
                    <img className="img-fluid paso-paso"
                        src={`${url}1kC8VfdH_uKCcdG0uW_M5UrKo8Ts-lpQo`} alt="pasos para cargar tu curso" />
                    <div className="overlay">
                        <div className="text-center paso"><strong>3. Evalución de solicitud</strong> <br /> Tu solicitud
                            será evaluda y serás notificado una vez sea aprobada.</div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4 mb-4">
                <div className="pasos">
                    <img className="img-fluid paso-paso paso_paso"
                        src={`${url}1w4ZBeIGhgEEsfHlPN-K9cYTyXcTtBfCN`} alt="pasos para cargar tu curso" />
                    <div className="overlay">
                        <div className="text-center paso"><strong>4. Revisá tu email</strong> <br /> En un plazo de 48 h hábiles te llegará la confirmación de tu solicitud.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
