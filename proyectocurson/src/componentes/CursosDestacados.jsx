import React, { useState, useEffect } from "react";
import Curso from "./Curso";
import "../css/cursos.css";

export default function CursosDestacados() {
  const [page, setPage] = useState(0);

  const [lista, setLista] = useState({
    datos: [],
    error: null,
    loading: true,
    cantidad: 0,
  });

  useEffect(() => {
    getCursos();
  }, [page]);

  console.log(lista.datos)

  const getCursos = async (page) => {
    try {
      const resp = await fetch(
        `http://localhost:3005/curso?limite=6&desde=${page}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await resp.json();
      return setLista({
        datos: data.cursos,
        loading: false,
        cantidad: data.cantidad,
        error: null,
      });
    } catch (error) {
      return setLista({
        datos: {},
        loading: false,
        error: error,
      });
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="bd-negro d-flex justify-content-center my-5">
        <label className="size-titulo">Cursos Destacados</label>
      </div>
      <div className="container">
        <div className="row">
          {lista.datos.map((curso) => {
            return <Curso _id={curso._id} />;
          })}
        </div>
      </div>
    </div>
  );
}
