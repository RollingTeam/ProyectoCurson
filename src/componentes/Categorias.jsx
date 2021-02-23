import React from "react";
import NavCategorias from "./NavCategorias";
import CarrouselCategorias from "./CarrouselCategorias";

export default function Categorias() {
  return (
    <div className="d-none d-xl-block" id="categorias">
      <h3 className="text-center">Categorías</h3>
      <NavCategorias />
      <CarrouselCategorias />
    </div>
  );
}
