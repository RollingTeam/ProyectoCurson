import React from "react";
import NavCategorias from "./NavCategorias";
import CarrouselCategorias from "./CarrouselCategorias";

export default function Categorias() {
  return (
    <div className="d-none d-xl-block">
      <NavCategorias />
      <CarrouselCategorias />
    </div>
  );
}
