import Rect from "react";
import Footer from "../componentes/Footer"
import Reviews from "../componentes/Reviews"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../componentes/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <Reviews />
      <Footer />
    </>
  );
}



