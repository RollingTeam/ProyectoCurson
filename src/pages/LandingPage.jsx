import React, {useState} from 'react'
import BarraDeNavegacion from '../componentes/BarraDeNavegacion'
import CursosDestacados from '../componentes/CursosDestacados'
import Categorias from '../componentes/Categorias'
import PublicarCurso from '../componentes/PublicarCurso'
import Reviews from '../componentes/Reviews'
import Footer from '../componentes/Footer'
import WelcomeCarousel from '../componentes/WelcomeCarousel'
import WelcomeMobile from '../componentes/WelcomeMobile'

export default function LandingPage() {
        const [ingreso, setIngreso] = useState({
        token: "",
        id: "",
    });
    return (
        <>
            <BarraDeNavegacion ingreso={ingreso} setIngreso={setIngreso}/>
            <WelcomeCarousel/>
            <WelcomeMobile />
            <CursosDestacados />
            <Categorias />
            <PublicarCurso />
            <Reviews ingreso={ingreso}/>
            <Footer />
        </>
    )
}
