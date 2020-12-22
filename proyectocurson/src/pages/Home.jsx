import React from "react";
import Footer from "../componentes/Footer"
import Reviews from "../componentes/Reviews"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../componentes/Navbar";
import CursosDestacados from '../componentes/CursosDestacados'
import TodosCursos from '../componentes/TodosCursos'
import PublicarCurso from "../componentes/PublicarCurso";



export default function Home() {

  return (
    <>
      <Navbar />
      <TodosCursos />
      <CursosDestacados />
      <Reviews />
      
     <PublicarCurso />

      <Footer />
    </>
  );
}


