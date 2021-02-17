import React, { useState, useEffect } from "react";
import CrearCategoria from "../componentes/CrearCategoria";
import NavbarAdminHome from "../componentes/NavbarAdminHome";


export default function FormNuevaCategoriaAdmin(props) {

  useEffect(() => {
    let validacion = JSON.parse(localStorage.getItem('role')) || "";
    if(validacion !== 'ADMIN_ROLE'){
        alert('No estas autorizado para ingresar a esta sección. Serás redireccionado al Inicio.');
        props.history.push('/')
    }
}, [])

  const [catForm, setCatForm] = useState({
    form: {
      nombre: "",
    },
  });
  const [estado, setEstados] = useState({
    loading: false,
    error: null,
  });
  const handleChange = (e) => {
    setCatForm({
      form: {
        ...catForm.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const cleanForm = () => {
    setCatForm({
      form: {
        nombre: "",
      },
    });
  };

  const handleSubmit = async (e) => {

    if(catForm.form.nombre==""){
      alert("El nombre es obligatorio")
    }else{
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // const resp = await fetch("http://localhost:3005/categoria", {
        const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/categoria", {
        method: "POST",
        body: JSON.stringify(catForm.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      const data = await resp.json();
      setEstados({
        loading: false,
        error: null,
      });
      if (data.ok) {
        console.log("La categoria fue creada correctamente");
        props.history.push("/admin/categorias");
      } else {
        setEstados({
          loading: false,
          error: data.ok,
        });
      }
    } catch (error) {
      console.warn(error);
    }
    cleanForm();
  }
  };

  return (
    <div>
      <NavbarAdminHome />
      <CrearCategoria
        handleChange={handleChange}
        formValues={catForm.form}
        handleSubmit={handleSubmit}
        cleanForm={cleanForm}
      />
    </div>
  );
}
