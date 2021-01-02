import React from "react";
import Footer from "../componentes/Footer";
import Reviews from "../componentes/Reviews";
import BarraDeNavegacion from "../componentes/BarraDeNavegacion";
import CursosDestacados from '../componentes/CursosDestacados';
import Categorias from "../componentes/Categorias";

export default function Home() {
  return (
    <>
      <BarraDeNavegacion />
      <CursosDestacados />
      {/* <Categorias /> */}
      <Reviews />
      <Footer />
    </>
  );
}