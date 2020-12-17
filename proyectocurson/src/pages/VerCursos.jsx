import React from "react";
import Footer from "../componentes/Footer";
import Navbar from "../componentes/Navbar";
import TodosCursos from "../componentes/TodosCursos";

export default function Home() {
  return (
    <>
      <Navbar />
      <TodosCursos />
      <Footer />
    </>
  );
}
