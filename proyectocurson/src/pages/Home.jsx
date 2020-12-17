import React from "react";
import Footer from "../componentes/Footer"
import Reviews from "../componentes/Reviews"
import Navbar from "../componentes/Navbar";
import CursosDestacados from '../componentes/CursosDestacados'
import Categorias from "../componentes/Categorias";

export default function Home() {
  return (
    <>
      <Navbar />
      <CursosDestacados />
      <Categorias />
      <Reviews />
      <Footer />
    </>
  );
}


