import React, { useState, useEffect } from "react";
import CursoInfo from "./CursoInfo";
import "../css/cursos.css";
import "../css/botones.css";

export default function TodosCursos() {
  const [page, setPage] = useState(0);

  const [lista, setLista] = useState({
    datos: [],
    error: null,
    loading: true,
    cantidad: 0,
  });

  useEffect(() => {
    actualizaLista(page);
  }, [page]);

  //Obtengo los datos de los cursos usando helpers
  const actualizaLista = (page) => {
    getCursos(page)
      .then((response) => {
        setLista(response);
      })
      .catch((response) => {
        setLista(response);
      });
  };

  // funcion para manejar paginado next
  const paginando = () => {
    if (page < lista.cantidad - 6) {
      setPage(page + 6);
    }
  };

  // Función para manejar paginado previo
  const despaginando = () => {
    if (page >= 6) {
      setPage(page - 6);
    }
  };

  const getCursos = async (page) => {
    // let token = JSON.parse(localStorage.getItem("token"));
    try {
      // envío los parámetros para la paginacion y defino el desde con el valor
      // del estado page
      const resp = await fetch(
        `http://localhost:3005/curso?limite=6&desde=${page}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        }
      );
      const data = await resp.json();
  
      //Almaceno en el estado lista los datos obtenidos
      return {
        datos: data.cursos,
        loading: false,
        cantidad: data.cantidad,
        error: null,
      };
    } catch (error) {
      return {
        datos: {},
        loading: false,
        error: error,
      };
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="bd-negro d-flex justify-content-center my-5">
        <label className="size-titulo">Cursos</label>
      </div>
      <div className="container">
        <div className="row">
          {lista.datos.map((curso) => {
            return <CursoInfo _id={curso._id} />;
          })}
        </div>
        <div className="container d-flex justify-content-center">
        <button className="btn btn-dark mr-2" onClick={despaginando}>
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
        <button className="btn btn-dark" onClick={paginando}>
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
        </div>
      </div>
    </div>
  );
}
