import React from 'react'
import BarraDeNavegacion from '../componentes/BarraDeNavegacion'
import CursosDestacados from '../componentes/CursosDestacados'
import Categorias from '../componentes/Categorias'
import PublicarCurso from '../componentes/PublicarCurso'
import Reviews from '../componentes/Reviews'
import Footer from '../componentes/Footer'
import WelcomeCarousel from '../componentes/WelcomeCarousel'
import WelcomeMobile from '../componentes/WelcomeMobile'

export default function LandingPage() {
    return (
        <>
            <BarraDeNavegacion />
            <WelcomeCarousel />
            <WelcomeMobile />
            <CursosDestacados />
            <Categorias />
            <PublicarCurso />
            <Reviews />
            <Footer />
        </>
    )
}
