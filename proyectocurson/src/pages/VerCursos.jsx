import React from "react";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer"
import PublicarCurso from "../componentes/PublicarCurso"



export default function Home() {

  return (
    <>
      <Navbar />
      <PublicarCurso />      
      <Footer />
    </>
  );
}