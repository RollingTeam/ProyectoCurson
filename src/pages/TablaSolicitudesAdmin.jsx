import React, { useState, useEffect } from "react";
import TablaSolicitudes from "../componentes/TablaSolicitudes";
import NavbarAdminHome from "../componentes/NavbarAdminHome";
import { getSolicitud } from "../helpers/Solicitudes";

export default function TablaSolicitudesAdmin() {
  const [solicitud, setSolicitud] = useState([]);
  useEffect(() => {
    getSolicitud()
      .then((response) => setSolicitud(response))
      .catch((error) => console.log(error));
  }, [solicitud]);

  return (
    <div>
      <NavbarAdminHome />
      <div className="container">
        <TablaSolicitudes solicitud={solicitud} />
      </div>
    </div>
  );
}
