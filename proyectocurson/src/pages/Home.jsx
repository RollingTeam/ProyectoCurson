import React from "react";
import Footer from "../componentes/Footer"
import BarraDeNavegacionAdmin from "../componentes/BarraDeNavegacionAdmin";
import Reviews from "../componentes/Reviews"

export default function Home() {

  return (
    <>
      <BarraDeNavegacionAdmin />
      <Reviews />
      <Footer />
    </>
  );
}