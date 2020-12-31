import React, { useState, useEffect } from "react";
import Curso from "./Curso";
import "../css/cursos.css";

export default function CursosDestacados() {
  // const [data, setData] = useState({
  //   cursos: [],
  // });
  const [page, setPage] = useState(0);

  const [lista, setLista] = useState({
    datos:[],
    error: null,
    loading: true,
    cantidad: 0,
  });

  useEffect(() => {
    getCursos();
  }, []);

  // const getData = async () => {
  //   const resp = await fetch("http://localhost:3008/cursos");
  //   const data = await resp.json();
  //   setData({
  //     cursos: data,
  //   });
  // };

const getCursos = async (page) => {
  try {
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
    return setLista({
      datos: data.cursos,
      loading: false,
      cantidad: data.cantidad,
      error: null,
    }
    );
 
  } catch (error) {
    return setLista({
      datos: {},
      loading: false,
      error: error,
    });
  }
};

  return (
    <div className="container-fluid my-5" id="destacados">
      <div className="bd-negro d-flex justify-content-center my-5">
        <label className="size-titulo">Cursos Destacados</label>
      </div>
      <div className="container">
        <div className="row">
          {lista.datos.map((curso) => {
            return <Curso _id={curso._id}/>;
          })}
        </div>
      </div>
    </div>
  );
}
