import React from "react";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer"
import PublicarCurso from "../componentes/PublicarCurso"
import CursoModal from "../componentes/CursoModal"


export default function Home() {

  return (
    <>
      <Navbar />
      <PublicarCurso />
      {/* <CursoModal /> */}
      <Footer />
    </>
  );
}