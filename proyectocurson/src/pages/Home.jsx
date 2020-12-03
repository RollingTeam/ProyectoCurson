import React from "react";
import Footer from "../componentes/Footer"
import NavbarAdminHome from "../componentes/NavbarAdminHome";
import Reviews from "../componentes/Reviews"

export default function Home() {

  return (
    <>
      <NavbarAdminHome />
      <Reviews />
      <Footer />
    </>
  );
}