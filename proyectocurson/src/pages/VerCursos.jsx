import React from "react";
import Footer from "../componentes/Footer";
import BarraDeNavegacion from "../componentes/BarraDeNavegacion";
import TodosCursos from "../componentes/TodosCursos";
import CursosPorCategoria from "../componentes/CursosPorCategoria"

export default function Home() {
  return (
    <>
      <BarraDeNavegacion />
      <TodosCursos />
      <CursosPorCategoria/>
      <Footer />
    </>
  );
}
