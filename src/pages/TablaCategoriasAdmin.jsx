import React, {useState, useEffect} from "react";
import TablaCategorias from "../componentes/TablaCategorias";
import NavbarAdminHome from "../componentes/NavbarAdminHome";
import { getCategoria } from "../helpers/Categorias";

export default function TablaCategoriasAdmin() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    getCategoria()
      .then((response) => setCat(response))
      .catch((error) => console.log(error));
  }, [cat]);

  return (
    <div>
      <NavbarAdminHome />
      <div className="container">
        <TablaCategorias cat={cat} />
      </div>
    </div>
  );
}
