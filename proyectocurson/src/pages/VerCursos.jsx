import React from "react";
import Footer from "../componentes/Footer";
import BarraDeNavegacion from "../componentes/BarraDeNavegacion";
import TodosCursos from "../componentes/TodosCursos";

export default function Home() {
  return (
    <>
      <BarraDeNavegacion />
      <TodosCursos />
      <Footer />
    </>
  );
}
