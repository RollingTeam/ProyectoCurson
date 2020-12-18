import React from "react";
import Footer from "../componentes/Footer"
import NavbarAdminHome from "../componentes/NavbarAdminHome";
// import TablaCategorias from '../componentes/TablaCategorias';
// import Usuarios from '../componentes/Usuarios'
import CrearCategoria from '../componentes/CrearCategoria'

export default function Home() {

  return (
    <>
      <NavbarAdminHome />
      < CrearCategoria />
      <Footer />
    </>
  );
}