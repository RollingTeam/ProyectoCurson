import React, {useEffect} from "react";
// import CursosInfo from "../componentes/CursosInfo";
import CursosListAdmin from "../componentes/CursosListAdmin";
import NavbarAdminHome from "../componentes/NavbarAdminHome";


export default function CursosAdmin(props) {

  useEffect(() => {
    let validacion = JSON.parse(localStorage.getItem('role')) || "";
    if(validacion !== 'ADMIN_ROLE'){
        alert('No estas autorizado para ingresar a esta sección. Serás redireccionado al Inicio.');
        props.history.push('/')
    }
}, [])

  return (
    <div>
      <NavbarAdminHome />
      <div className="container mt-5">
        {/* <CursosInfo /> */}
        <CursosListAdmin />
      </div>
    </div>
  );
}
