import React from "react";
import CursosInfo from "../componentes/CursosInfo";
import CursosListAdmin from "../componentes/CursosListAdmin";
import NavbarAdminHome from "../componentes/NavbarAdminHome";


export default function CursosAdmin() {
  return (
    <div>
      <NavbarAdminHome />
      <div className="container">
        <CursosInfo />
        <CursosListAdmin />
      </div>
    </div>
  );
}
