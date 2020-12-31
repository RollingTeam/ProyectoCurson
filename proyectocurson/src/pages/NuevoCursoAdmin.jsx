import React, { useState, useEffect } from "react";
import NewCursoAdmin from "../componentes/NewCursoAdmin";
import NavbarAdminHome from "../componentes/NavbarAdminHome";

export default function NuevoCursoAdmin(props) {
  const [cursoForm, setCursoForm] = useState({
    form: {
      nombre: "",
      descripcion: "",
      categoria: "",
      nivel: "",
      cupo: "",
      duracion: "",
      img: "",
      contacto: "",
    },
  });

  const [estado, setEstados] = useState({
    loading: false,
    error: null,
  });

  const [cat, setCat] = useState([]);

  useEffect(() => {
    getCategoria();
  }, []);

  const handleChange = (e) => {
    setCursoForm({
      form: {
        ...cursoForm.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const cleanForm = () => {
    setCursoForm({
      form: {
        nombre: "",
        descripcion: "",
        cupo: "",
        duracion: "",
        img: "",
        contacto: "",
      },
    });
  };

  const getCategoria = async () => {
    try {
      const resp = await fetch("http://localhost:3005/categoria", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await resp.json();
      console.log(data.categorias);
      setCat(data.categorias);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:3005/curso", {
        method: "POST",
        body: JSON.stringify(cursoForm.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await resp.json();
      // console.log(data);
      setEstados({
        loading: false,
        error: null,
      });
      if (data.ok) {
        props.history.push("/admin/cursos");
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
  };

  return (
    <div>
      <NavbarAdminHome />
      <NewCursoAdmin
        handleChange={handleChange}
        formValues={cursoForm.form}
        categorias={cat}
      />
      <div className="form-group d-flex justify-content-center mt-4">
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={cleanForm}
        >
          Restaurar
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={handleSubmit}
        >
          Guardar
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={() => {
            props.history.push("/admin/cursos");
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
