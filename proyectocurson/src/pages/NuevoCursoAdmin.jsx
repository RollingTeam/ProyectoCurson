import React, { useState } from "react";
import NewCursoAdmin from "../componentes/NewCursoAdmin";

export default function NuevoCursoAdmin() {
  const [cursoForm, setCursoForm] = useState({
    form: {
      id: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      nivel: "",
      cupo: "",
      duracion: "",
      imagen: "",
      estado: 1,
      contacto: "",
    },
  });

  const handleChange = (e) => {
    setCursoForm({
      form: {
        ...cursoForm.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const cleanForm = (e) => {
    e.preventDefault();
    setCursoForm({
      form: {
        id: "",
        nombre: "",
        descripcion: "",
        categoria: "",
        nivel: "",
        cupo: "",
        duracion: "",
        imagen: "",
        estado: 1,
        contacto: "",
      },
    });
  };

  const handleSubmit = async (e) => {
      console.log("Me hiciste clic para guardar el curso")
    e.preventDefault();
    try {
      await fetch("http://localhost:3008/cursos", {
        method: "POST",
        body: JSON.stringify(cursoForm.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.warn(error);
    }
    cleanForm()
  };
  return (
    <div>
      <NewCursoAdmin
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formValues={cursoForm.form}
        cleanForm={cleanForm}
      />
    </div>
  );
}
