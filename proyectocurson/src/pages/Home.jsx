import React from "react";
import Footer from "../componentes/Footer";
import BarraDeNavegacion from "../componentes/BarraDeNavegacion";
import PublicarCurso from '../componentes/PublicarCurso'
import Categorias from "../componentes/Categorias";
import TodosCursos from '../componentes/TodosCursos'

export default function Home() {
  return (
    <>
      <BarraDeNavegacion />
      <Categorias />
      <TodosCursos />
      <PublicarCurso />
      <Footer />
    </>
  );
}
