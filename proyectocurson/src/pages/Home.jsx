<<<<<<< HEAD
import Rect from "react";
import Footer from "../componentes/Footer"
import Reviews from "../componentes/Reviews"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../componentes/Navbar";
import CursosDestacados from '../componentes/CursosDestacados'
import TodosCursos from '../componentes/TodosCursos'
=======
import React from "react";
import Footer from "../componentes/Footer";
import Reviews from "../componentes/Reviews";
import BarraDeNavegacion from "../componentes/BarraDeNavegacion";
import CursosDestacados from '../componentes/CursosDestacados';
import Categorias from "../componentes/Categorias";
>>>>>>> 69ae0a9445d87d0fd6030441b0ac9cb44bc3f661

export default function Home() {
  return (
    <>
      <BarraDeNavegacion />
      <CursosDestacados />
      <Categorias />
      <Reviews />
      <Footer />
    </>
  );
}