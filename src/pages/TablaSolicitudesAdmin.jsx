import React, { useState, useEffect } from "react";
import TablaSolicitudes from "../componentes/TablaSolicitudes";
import NavbarAdminHome from "../componentes/NavbarAdminHome";
import { getSolicitud } from "../helpers/Solicitudes";

export default function TablaSolicitudesAdmin(props) {

  useEffect(() => {
    let validacion = JSON.parse(localStorage.getItem('role')) || "";
    if(validacion !== 'ADMIN_ROLE'){
        alert('No estas autorizado para ingresar a esta sección. Serás redireccionado al Inicio.');
        props.history.push('/')
    }
}, [])

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
