import React, { useState, useEffect } from "react";
import VerSolicitudCurso from "../componentes/VerSolicitudCurso";
import NavbarAdminHome from "../componentes/NavbarAdminHome";
import { getCategoria } from "../helpers/Categorias";

export default function EditarSolicitud(props) {
  const solicitudId = props.match.params.solicitudId;

  const [actualizada, setActualizada] = useState({
    nombre: "",
    estado: true,
    categoria: {},
    descripcion: "",
    cupo: 0,
    nivel: "",
    contacto: "",
    img: "",
    isActive: true,
  });

  const [cat, setCat] = useState([]);

  const getDataId = async () => {
    try {
      // const resp = await fetch(`http://localhost:3005/solicitud/${solicitudId}`, {
      const resp = await fetch(
        `https://afternoon-fjord-84174.herokuapp.com/solicitud/${solicitudId}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await resp.json();
      setActualizada(data.solicitud);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDataId();
    getCategoria()
      .then((response) => setCat(response))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = ({ target }) => {
    setActualizada({
      ...actualizada,
      [target.name]: target.value,
    });
  };

  const cleanForm = (e) => {
    e.preventDefault();
    props.history.push("/admin/solicitudes");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // await fetch(`http://localhost:3005/solicitud/${solicitudId}`, {
      await fetch(
        `https://afternoon-fjord-84174.herokuapp.com/solicitud/${solicitudId}`,
        {
          method: "PUT",
          body: JSON.stringify(actualizada),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: `${token}`,
          },
        }
      );
      props.history.push("/admin/solicitudes");
    } catch (error) {
      console.warn(error);
    }
  };

  const publicarCurso = async (e) => {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // await fetch(`http://localhost:3005/curso`, {
      const resp = await fetch(
        `https://afternoon-fjord-84174.herokuapp.com/curso`,
        {
          method: "POST",
          body: JSON.stringify(actualizada),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: `${token}`,
          },
        }
      );
      const data = await resp.json();
      console.log(data);
      props.history.push("/admin/cursos");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <NavbarAdminHome />
      <div className="container-fluid mt-5">
        <VerSolicitudCurso
          handleChange={handleChange}
          formValues={actualizada}
          categorias={cat}
        />
        <div className="form-group d-flex justify-content-center my-4">
          <button
            type="button"
            className="btn btn-secondary mx-3"
            onClick={cleanForm}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-3"
            onClick={handleSubmit}
          >
            Guardar
          </button>
          {(actualizada.estado === "Pendiente" && actualizada.isActive) && (
            <button
              type="button"
              className="btn btn-success mx-3"
              onClick={publicarCurso}
            >
              Publicar
            </button>
          )}
        </div>
      </div>
    </>
  );
}
