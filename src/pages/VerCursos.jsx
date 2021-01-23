import React from "react";
import Footer from "../componentes/Footer";
import NavVerCursos from "../componentes/NavVerCursos";
import TodosCursos from "../componentes/TodosCursos";
import CursosPorCategoria from "../componentes/CursosPorCategoria"

export default function Home() {
  return (
    <>
      <NavVerCursos />
      <TodosCursos />
      <CursosPorCategoria/>
      <Footer />
    </>
  );
}
