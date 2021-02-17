import React, { useState, useEffect } from "react";
import NavbarAdminHome from "../componentes/NavbarAdminHome";
import CrearCategoria from "../componentes/CrearCategoria";

export default function EditarCategoriaAdmin(props) {
  const categoriaId = props.match.params.categoriaId;
  const [actualizada, setActualizada] = useState({
    nombre: "",
    estado: true,
  });

  useEffect(() => {
    let validacion = JSON.parse(localStorage.getItem('role')) || "";
    if(validacion !== 'ADMIN_ROLE'){
        alert('No estas autorizado para ingresar a esta sección. Serás redireccionado al Inicio.');
        props.history.push('/')
    }
}, [])

  const getDataId = async () => {
    try {
      const resp = await fetch(
        // `http://localhost:3005/categoria/${categoriaId}`,
        `https://afternoon-fjord-84174.herokuapp.com/categoria/${categoriaId}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await resp.json();
      setActualizada(data.categoria);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDataId();
  }, []);

  const handleChange = ({ target }) => {
    setActualizada({
      ...actualizada,
      [target.name]: target.value,
    });
  };

  const cancelSubmit = (e) => {
    e.preventDefault();
    props.history.push("/admin/categorias");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // await fetch(`http://localhost:3005/categoria/${categoriaId}`, {
        await fetch(`https://afternoon-fjord-84174.herokuapp.com/categoria/${categoriaId}`, {
        method: "PUT",
        body: JSON.stringify(actualizada),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`
        },
      });
      props.history.push("/admin/categorias");
    } catch (error) {
      console.warn(error);
    }
  };

  const activarCategoria = async (e) => {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // await fetch(`http://localhost:3005/categoria/${categoriaId}`, {
        await fetch(`https://afternoon-fjord-84174.herokuapp.com/categoria/${categoriaId}`, {
        method: "PUT",
        body: JSON.stringify({
          estado: true,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`
        },
      });
      props.history.push("/admin/categorias");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <NavbarAdminHome />
      <div className="container-fluid mt-5">
        <CrearCategoria
          handleChange={handleChange}
          formValues={actualizada}
          handleSubmit={handleSubmit}
          cancelSubmit={cancelSubmit}
          activarCategoria={activarCategoria}
        />
      </div>
    </>
  );
}
