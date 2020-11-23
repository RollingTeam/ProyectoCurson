import React from "react";
import Footer from "../componentes/Footer"
import Reviews from "../componentes/Reviews"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../src/components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar/>
      <Reviews />
      <Footer />
    </>
  );
}



