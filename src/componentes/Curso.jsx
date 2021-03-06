import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/cursos.css";

export default function Curso({ _id }) {
  const [cursoForm, setCursoForm] = useState({
    form: {
      nombre: "",
      descripcion: "",
      categoria: {},
      nivel: "",
      cupo: "",
      duracion: "",
      img: "",
      contacto: "",
    },
  });

  const getDataId = async () => {
    try {
      // const resp = await fetch(`http://localhost:3005/curso/${_id}`,{
      const resp = await fetch(` https://afternoon-fjord-84174.herokuapp.com/curso/${_id}`, {
        method: 'GET',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      });
      const data = await resp.json();
      // console.log(data.curso)
      setCursoForm({
        form: data.curso,
      });
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDataId();
  }, [_id]);

  return (
    <div key={_id} className="col-12 col-md-6 col-lg-4">
      <div className="card-curso m-2">
        <img src={cursoForm.form.img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{cursoForm.form.nombre}</strong>
          </h5>
          <span className="badge badge-danger">{cursoForm.form.categoria.nombre}</span>
          <span className="ml-2 badge badge-warning">{cursoForm.form.nivel}</span>
          <p className="card-text">{cursoForm.form.descripcion}</p>
          <Link
            to={`cursos/${cursoForm.form._id}`}
            className="btn btn-danger float-right text-decoration-none"
          >
            Ver Mas
          </Link>
        </div>
      </div>
    </div>
  );
}
